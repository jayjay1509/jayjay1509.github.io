---
title: '3D Scene'
description: 'Lorem ipsum dolor sit amet'
pubDate: '02.11.2025'
heroImage: '/blog-placeholder-4.jpg'
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
![blog placeholder](/3Dloading.png)

## Cubemap

the cubmap was also loded with Assimp 
![blog placeholder](/cubemapModel.png)

## Back face culling

after this the back face culling was added 
![blog placeholder](/backFaceCull.png)

## Frustum Culling

the frustum culling was also added to enhance the perfoemences

<video controls style="width: 100%; height: auto;">
  <source src="/frustum.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Blinn-Phong shading model

a Blinn-Phong was added for the lightning 
![blog placeholder](/Blinn-Phong.png)

## Framebuffer

a frame buffer was added to be abble to add some after effect like the bloom

## Bloom

thanks to the frame buffer we can now add some bloom

with out bloom:
![blog placeholder](/nb.png)

with bloom:
![blog placeholder](/yb.png)

## Instancing

there is some instancing whith the 3000 trees
![blog placeholder](/instancing.png)

## Normal map

there is also some normal maping on the brick ground
![blog placeholder](/normal.png)

using this normal map texture:
![blog placeholder](/brickwall_normal.jpg)




## Shadow Map


## Deferred rendering


## SSAO


## Gamma correction