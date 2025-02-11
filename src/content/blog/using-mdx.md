---
title: '3D Scene'
description: 'blogpost for 3d scene'
pubDate: '02.11.2025'
heroImage: '/3d_scene1.png'
---

## What is this 3D scene ?

This is a 3D scene made with openGL. 

## what's in this 3D scene ?

In this 3D scene there is:
- 3D model loading
- Cubemaps
- Back face culling
- Frustum Culling
- Blinn-Phong shading model
- Framebuffer
- Bloom
- instancing
- Normal map
- Shadow Map
- Deferred rendering
- SSAO
- Gamma correction

## 3D model loading

the first thing that was made was loading a 3D model in GLTF with Assimp 
![blog placeholder](/3d_scene6.png)

## Cubemap

the cubmap was also loded with Assimp 
![blog placeholder](/3d_scene4.png)

## Back face culling

after this the back face culling was added 
<video controls style="width: 100%; height: auto;">
  <source src="/3d_scene1.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Frustum Culling

the frustum culling was also added to enhance the perfoemences

<video controls style="width: 100%; height: auto;">
  <source src="/3d_scene3.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Blinn-Phong shading model

a Blinn-Phong was added for the lightning 

<video controls style="width: 100%; height: auto;">
  <source src="/3d_scene2.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Framebuffer

a frame buffer was added to be abble to add some after effect like the bloom

## Bloom

thanks to the frame buffer we can now add some bloom

with out bloom:
![blog placeholder](/3d_scene8.png)

with bloom:
![blog placeholder](/3d_scene4.png)

## Instancing

there is some instancing whith the 1000 destroyer star wars
![blog placeholder](/3d_scene9.png)
![blog placeholder](/3d_scene7.png)

## Normal map

there is also some normal maping on the brick ground
![blog placeholder](/normal.png)

using this normal map texture:
![blog placeholder](/brickwall_normal.jpg)




## Shadow Map


## Deferred rendering


## SSAO


## Gamma correction