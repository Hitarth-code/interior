export interface ImageAnalysis {
  dominantColors: string[];
  brightness: number; // 0-1
  saturation: number; // 0-1
  warmth: number; // 0-1 (how warm vs cool)
  contrast: number; // 0-1
  hasGreen: boolean;
  hasBlue: boolean;
  hasWarmTones: boolean;
  hasCoolTones: boolean;
  complexity: number; // 0-1 (how many different colors)
}

export function analyzeImage(imageSrc: string): Promise<ImageAnalysis> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(getDefaultAnalysis());
        return;
      }

      // Sample at lower resolution for performance
      const maxSize = 100;
      const scale = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let totalR = 0, totalG = 0, totalB = 0;
      let totalBrightness = 0;
      let totalSaturation = 0;
      let warmPixels = 0;
      let coolPixels = 0;
      let greenPixels = 0;
      let bluePixels = 0;
      const colorCounts: Map<string, number> = new Map();
      const pixelCount = pixels.length / 4;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        totalR += r;
        totalG += g;
        totalB += b;

        // Brightness (0-1)
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        totalBrightness += brightness;

        // Saturation
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const sat = max === 0 ? 0 : (max - min) / max;
        totalSaturation += sat;

        // Warmth detection
        if (r > b + 20) warmPixels++;
        if (b > r + 20) coolPixels++;

        // Color detection
        if (g > r && g > b && g > 80) greenPixels++;
        if (b > r && b > g && b > 80) bluePixels++;

        // Quantize colors for complexity
        const quantized = `${Math.round(r / 32) * 32}-${Math.round(g / 32) * 32}-${Math.round(b / 32) * 32}`;
        colorCounts.set(quantized, (colorCounts.get(quantized) || 0) + 1);
      }

      const avgR = totalR / pixelCount;
      const avgG = totalG / pixelCount;
      const avgB = totalB / pixelCount;
      const avgBrightness = totalBrightness / pixelCount;
      const avgSaturation = totalSaturation / pixelCount;
      const warmth = warmPixels / pixelCount;
      const contrast = Math.max(avgR, avgG, avgB) / 255 - Math.min(avgR, avgG, avgB) / 255;
      const complexity = Math.min(colorCounts.size / 50, 1);

      // Extract dominant colors
      const sortedColors = Array.from(colorCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([color]) => {
          const [r, g, b] = color.split('-').map(Number);
          return rgbToHex(r, g, b);
        });

      resolve({
        dominantColors: sortedColors,
        brightness: avgBrightness,
        saturation: avgSaturation,
        warmth,
        contrast,
        hasGreen: greenPixels / pixelCount > 0.1,
        hasBlue: bluePixels / pixelCount > 0.1,
        hasWarmTones: warmth > 0.5,
        hasCoolTones: (coolPixels / pixelCount) > 0.3,
        complexity,
      });
    };
    img.onerror = () => resolve(getDefaultAnalysis());
    img.src = imageSrc;
  });
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => Math.min(255, Math.max(0, x)).toString(16).padStart(2, '0')).join('').toUpperCase();
}

function getDefaultAnalysis(): ImageAnalysis {
  return {
    dominantColors: ['#F5F5F5', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161'],
    brightness: 0.6,
    saturation: 0.3,
    warmth: 0.5,
    contrast: 0.4,
    hasGreen: false,
    hasBlue: false,
    hasWarmTones: true,
    hasCoolTones: false,
    complexity: 0.5,
  };
}
