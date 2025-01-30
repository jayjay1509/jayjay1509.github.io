---
title: 'Third post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '/shader.png'
---

---

<video controls style="width: 100%; height: auto;">
<source src="/shader1.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

---

## Create a Dynamic Shader with a Color Palette
In this post, I will explain a shader that I created to generate a dynamic visual effect based on a color palette and a circular movement. This shader uses GLSL to display bright and colorful patterns that move according to time, creating a fluid and vibrant visual effect.

### Understanding the Shader
The main purpose of this shader is to create an animation where a color changes based on the distance from a central point, and that changes over time. Let's look at the different parts of the code.

## Function palette(float t)
The palette function generates a dynamic color based on the value of t. It uses trigonometric functions to create a smooth and continuous color variation, creating a color cycling effect that varies over time.

```glsl
vec3 palette(float t) //I was inspired by ianlieberman07
{
vec3 a = vec3(0.5, 0.5, 0.5);
vec3 b = vec3(0.5, 0.5, 0.5);
vec3 c = vec3(1.0, 1.0, 1.0);
vec3 d = vec3(0.263, 0.416, 0.557);
return a + b * cos(6.28318 * (c * t + d));
}
```
This function produces a visual effect that varies between different color hues as time passes.

## mainImage Function
The mainImage function is responsible for displaying the shader. It takes into account the coordinates of each pixel on the screen and applies the animation defined by the shader. The position of the pixels is changed over time, creating a smooth movement of the effect.

```glsl
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
vec2 uv = fragCoord / iResolution.xy;

uv.x *= iResolution.x / iResolution.y;

float time = iTime * 5.0;

vec2 pos = mod(uv * 10.0 + time, 1.0) - 1.8;

float dist = length(pos);

vec3 color = palette(dist + time);

float glow = smoothstep(1.1, 1.1, 6.5 - dist);

color *= glow;

fragColor = vec4(color, 1.0);
}
```
## MainImage Function Details
The coordinates of each pixel are normalized by fragCoord / iResolution.xy.
The time variable is used to animate the shader and make the effect move.
The mod(uv * 10.0 + time, 1.0) calculation creates an animated circular pattern.
The distance from the center is calculated with length(pos), which creates a "pulsing" effect around the center.
The smoothstep function is used to smooth the transition of the light effect at the periphery of the circle, giving the illusion of a "glow".
Final Result
The final result is a dynamic pattern of colors that changes as time passes. The colors vary depending on the distance of the pixels from the center and evolve in a smooth cycle.

## Conclusion
This shader is a great example of using trigonometric functions and manipulating pixel position to create animated visual effects in real time. With the palette function, a smooth and dynamic color gradient effect can be easily achieved. This type of effect can be used in a variety of graphics applications, such as animated backgrounds, lighting effects, or even games.