---
title: 'Dynamic Shader for Animated Sprites'
description: 'An animated shader with rainbow colors and moving sprites for dynamic visual effects.'
pubDate: '2024-12-19'
heroImage: '/nynacatshader.png'
---

## Summary

1. [Shader Overview](#shader-overview)
2. [Code Details](#code-details)
- [`rand` Function](#rand-function)
- [`rainbow` Function](#rainbow-function)
- [Sprite Position Calculation](#sprite-position-calculation)
- [Color Mixing and Animation](#color-mixing-and-animation)
3. [Conclusion](#conclusion)

---

<video controls style="width: 100%; height: auto;">
<source src="/nyan.mp4" type="video/mp4">
Your browser does not support playback of videos.

</video>

---

## Shader Overview

In this post, I'll explain how I created a dynamic shader that generates animated sprites with a rainbow-colored effect. Each sprite moves slightly randomly and changes color over time, creating an attractive visual effect for real-time graphics applications. This shader uses GLSL and relies on basic principles like manipulating positions and colors using time.

## Code Details

### `rand` Function

The `rand` function generates a pseudo-random value based on an input vector. It uses mathematical functions like `sin` and `dot` to produce noise that allows the sprites to be slightly offset, to prevent them from being too regular in their layout.

```glsl
float rand(vec2 co) {
float timeSeed = iTime * 1000.0;
return fract(sin(dot(co , vec2(12.9898, 78.233))) * 43758.5453);
}

### Function rainbow(float t)
The rainbow function generates a color gradient based on time t. It uses a combination of trigonometric values ​​to create a rainbow color cycle effect. This adds a dynamic effect to the sprites, which change color as time progresses.

```glsl
vec3 rainbow(float t) {
return 0.5 + 0.5 * cos(t + vec3(0.0, 2.0, 4.0));
}
```

### The mainImage Function
This is where the magic happens. The mainImage function is responsible for displaying the sprites. The fragment shader takes the screen coordinates (in fragCoord) and normalizes them to texture coordinates with uv. Then, it sets the number of sprites to display on the x and y axis with the variables numSpritesX and numSpritesY.

```glsl
vec2 uv = fragCoord.xy / iResolution.xy;
int numSpritesX = 10;
int numSpritesY = 10;
```

Time is also used to animate the sprites with `frame = floor(mod(iTime * 10.0, 6.0));`, which creates a time-based animation. The `frame` allows the sprites to change as time passes, giving them a sense of changing state.

### Sprite Positions and Random Movement
The sprite positions are calculated in the nested loop for the x and y axes. The initial position is determined by the grid coordinates, but I add a random component so that each sprite has a small offset. Additionally, each sprite moves over time with a sinusoidal effect, giving a smooth motion.

```glsl
vec2 spritePos = vec2(float(x) * spacingX, float(y) * spacingY);
vec2 randomOffset = vec2(rand(vec2(float(x), float(y))), rand(vec2(float(x) + 1.0, float(y) + 1.0)));
spritePos += randomOffset * spacingX;
spritePos.x += sin(iTime * 5.0 + float(x)) * 0.18;
spritePos.y += sin(iTime * 5.0 + float(y)) * 0.18;
```

### Color Blending and Animation
Next, I blend the base color with the sprite color. I use the rainbow effect I generated earlier to create a colored trail. This trail follows the sprites as they move. The alpha calculation allows the sprite colors to gradually blend with the background color, while taking into account the transparency of the sprite pixels.

```glsl
float rainbowTime = iTime + length(spritePos);
vec3 rainbowColor = rainbow(rainbowTime * 0.5);
vec3 trailColor = rainbowColor * 0.6;
baseColor.rgb = mix(baseColor.rgb, trailColor, 0.5);
```

The rainbow effect is combined with the sprite color at each step of the animation, giving a sense of fluid and colorful movement.

## Final Result
The final result is a grid of animated sprites that move slightly while displaying a dynamic rainbow gradient. This creates an interesting and vibrant visual effect, with colors that slowly change as time passes.

## Conclusion
This shader is a great example of how you can manipulate the colors and positions of objects in real time in a GLSL shader. By using functions like rand, sin, and cos, you can achieve fluid and dynamic visual effects that react to time and the environment. This provides a great deal of flexibility