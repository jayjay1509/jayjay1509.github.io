---
title: 'Namakemono'
description: 'Lorem ipsum dolor sit amet'
pubDate: '2024-11-20'
heroImage: '/namakemono.jpg'
---

<video controls style="width: 100%; height: auto;">
  <source src="/test3.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Sommaire

1. [Présentation de Namakemono Engine](#presentation-de-namakemono-engine)
2. [Fonctionnalités de Namakemono Engine](#fonctionnalites-de-namakemono-engine)
    - [Application des forces](#application-des-forces)
    - [Gestion des collisions](#gestion-des-collisions)
    - [Gestion des triggers](#gestion-des-triggers)
3. [Test de Namakemono Engine](#test)
4. [Classes du Moteur](#classes-du-moteur)
    - [Classe Body](#classe-body)
    - [Classe Shape](#classe-shape)
    - [Classe Quadtree](#classe-quadtree)

## Présentation de Namakemono Engine

Namakemono Engine is a small physic engine made in C++.

## Fonctionnalités de Namakemono Engine

In Namakemono Engine, you can:
- Apply forces to an object.
- Apply forces to an object.
- Set an object as a trigger.

### Application des forces

Namakemono Engine uses a custom Vector2D class to apply forces. In this scene, which simulates a solar system using gravity and an initial force, we can see planets orbiting around a sun.

<video controls style="width: 100%; height: auto;">
  <source src="/solar_systeme.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

### Gestion des collisions

Initially, it checks collisions between each object and every other object. This is done for all objects.

<video controls style="width: 100%; height: auto;">
  <source src="/colision.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

Then, we implemented a Quadtree, which divides the screen if there are too many shapes. It keeps dividing itself until there is a predefined number of shapes inside each section, and then it checks collisions for each part of the Quadtree individually.

<video controls style="width: 100%; height: auto;">
  <source src="/quadtree.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

### Gestion des triggers

Triggers are an option that a shape can have to detect if any other shape is touching the trigger shape. In this scene, we see the shape turning red when the shapes are touching each other.

<video controls style="width: 100%; height: auto;">
  <source src="/trigger.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Test

To test the engine, we tried the solar system simulation with collisions, and here are the results.

<video controls style="width: 100%; height: auto;">
  <source src="/solar_colision.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

## Classes du Moteur

### Classe Body

For my physics engine, I created the **Body** class to represent physical objects with fundamental properties such as position, velocity, acceleration, mass, angle, and angular velocity. This class is designed for flexibility and can be easily extended to simulate various physical behaviors.

#### Key Properties
The **Body** class includes vectors for position, velocity, and acceleration (initialized to zero), and a default mass of 1.0. It also supports angle and angular velocity to simulate rotation, which is essential for modeling orbital movements and object rotations.

#### Flexible Constructors
Several constructors are implemented to provide flexibility when creating **Body** objects, allowing you to initialize objects with combinations of position, velocity, and mass.

#### Property Management
Methods for getting and setting the internal properties of a **Body** are included. This makes it simple to adjust and retrieve the position, velocity, acceleration, mass, angle, and angular velocity.

#### Applying Forces and Updating
The **Body** class has methods to apply forces, which update acceleration based on force and mass. The positions and angles are updated based on velocity and time, simulating realistic movement over time.

#### Conclusion
The **Body** class forms the foundation of my physics engine, enabling realistic and dynamic simulations. Its extensible design allows it to easily adapt to various simulation needs.

### Classe Shape

To complement the **Body** class in my engine, I created the **Shape** class to handle various geometric shapes like circles, squares, rectangles, and polygons.

#### Key Properties
The **Shape** class has properties such as size (or dimensions for rectangles), shape type, color, and a **Body** instance for position and mass. It also tracks the shape’s state (initialized, static) and its bounding box.

#### Flexible Constructors
Multiple constructors allow for flexible creation of **Shape** objects. One initializes the shape with a size, physical body, and type, while another supports specific dimensions for rectangles.

#### Property Management
Getters and setters for shape properties (like size, color, number of sides for polygons) allow for easy manipulation within the simulation.

#### Bounding Box and Containment Check
Bounding box calculations help determine the minimum and maximum extents of a shape, while the **Contains** method checks if a point lies within the shape, with specific checks for different shapes (e.g., distance from the center for circles).

#### Mass-to-Color Conversion
A private method converts the mass of the **Body** into a color, making it visually apparent how mass affects a shape.

#### Conclusion
The **Shape** class enriches my physics engine by providing robust management for geometric shapes. It facilitates dynamic simulations where each shape interacts with its environment realistically.

### Classe Quadtree

To improve collision detection efficiency in my engine, I implemented the **Quadtree** class. This data structure organizes objects in 2D space and optimizes collision checks.

#### Key Properties
The **Quadtree** divides the space into quadrants, storing shapes and optimizing space management. Key properties include bounds (min and max), central position, and dimensions.

#### Flexible Constructors
Two constructors are available: one for covering the entire area and another for defining specific regions when creating sub-quadrants.

#### Managing Children and Shapes
The **Quadtree** can recursively contain child quadrants. Methods like **AddChild** and **CountShape** facilitate space subdivision and shape counting, while **AddShape** and **Contains** manage shapes within the quadtree.

#### Space Division and Optimization
The **Divide** method splits the **Quadtree** into four sub-quadrants, distributing shapes for more efficient collision detection.

#### Shape Retrieval
The **Retrieve** method gathers all shapes within the **Quadtree** and its children, reducing the number of comparisons needed for collision checks.

#### Conclusion
The **Quadtree** class significantly boosts the performance of my physics engine by optimizing shape management and collision detection through space division.

---

![Body Class Example GIF](/test2.gif)