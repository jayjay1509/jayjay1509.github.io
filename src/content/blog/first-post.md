---
title: 'Namakemono'
description: 'Lorem ipsum dolor sit amet'
pubDate: '11.11.2024'
heroImage: '/blog-placeholder-3.jpg'
---

## Introduction to the Body Class

As part of my physics engine project, I created the Body class to represent physical objects with basic properties such as position, velocity, acceleration, and mass. This class is designed to be flexible and extensible, allowing for the modeling of various physical behaviors.

### Properties of the Body Class

The Body class contains several essential properties. Position, velocity, and acceleration are represented by 2D vectors (Vec2), initialized to zero. Mass is initialized to 1.0 by default. I have also added properties for angle and angular velocity to simulate rotations, which is crucial for orbital movements and object rotations.

### Flexible Constructors

To ease the creation of Body objects, I implemented several constructors. These constructors allow you to initialize a Body object with different combinations of parameters, such as position only, position and velocity, or position and mass. This provides great flexibility when instantiating objects based on the specific needs of the simulation.

### Property Management

I defined methods to access and modify the internal properties of the Body object. These methods include getters to retrieve position, velocity, acceleration, mass, angle, and angular velocity. Additionally, setters allow you to set new values for these properties. This enables easy manipulation of Body objects within the simulation.

### Applying Forces and Updating Properties

The Body class includes methods to apply forces, which update the object's acceleration based on the applied force and its mass. A method is also available to reset the applied forces. The positions and angles of the objects are updated according to their velocities and elapsed time, allowing for realistic movement simulations over time.

### Conclusion

The Body class provides a solid foundation for modeling physical objects in a simulation engine. With well-defined properties and methods for managing forces and movements, this class enables the creation of realistic and dynamic simulations. Its modular and flexible approach makes it easy to extend and adapt the class to the specific needs of any physics simulation project.

---

## Introduction to the Shape Class

To enrich my physics engine, I created the Shape class, which manages different geometric shapes such as circles, squares, rectangles, and polygons. This class includes several essential functionalities for defining and manipulating these shapes.

### Properties of the Shape Class

The Shape class has several properties, including size (or dimensions for rectangles), shape type, color, and an instance of the Body class to represent physical properties like position and mass. Additional properties include minimum and maximum bounds to delimit the shape, as well as indicators for the shape's state (initialized, trigger, static).

### Flexible Constructors

To allow for flexible creation of Shape objects, I implemented multiple constructors. The first constructor initializes a shape with a size, a physical body, and a shape type. The second constructor allows specifying dimensions for rectangles, thus facilitating the creation of rectangular shapes with different sizes for the X and Y axes.

### Property Management

The Shape class includes methods to access and modify its internal properties. For example, you can get and set the size, the number of sides (for polygons), the color, and check if the shape is static or initialized. These methods allow for flexible manipulation of Shape objects within the simulation.

### Bounding Box Calculation and Containment Check

The minimum and maximum bounds of each shape are calculated based on its position and dimensions. A Contains method checks if a given point is inside the shape's bounds. This method is specific to the type of shape: for squares and rectangles, it checks the coordinates against the bounds, while for circles, it calculates the distance from the center of the shape.

### Mass-to-Color Conversion

A private method converts the mass of the Body object into a color by normalizing the mass to generate a color based on the defined minimum and maximum mass scale. This allows visualizing the mass differences between shapes through color variations, where higher mass corresponds to a redder color and lower mass to a bluer one.

### Conclusion

The Shape class provides robust and flexible management of geometric shapes in my physics engine. By combining physical properties with shape-specific functionalities, this class enables the creation of rich and dynamic simulations where each shape can interact realistically with its environment.

---

## Introduction to the Quadtree Class

To optimize collision management and detection in my physics engine, I implemented a data structure called Quadtree. This structure is particularly efficient for organizing objects in a 2D space, improving performance during collision checks between shapes.

### Properties of the Quadtree Class

The Quadtree class is initialized with a set of shapes (Shape) and divides the space into quadrants to facilitate object search and management. Key properties include the bounds of the region covered by the quadtree (min_bound_ and max_bound_), as well as the central position (pos_) and dimensions (size_x_ and size_y_) of the region.

### Flexible Constructors

To create a Quadtree, I implemented two constructors. The first initializes a quadtree covering the entire area defined by width and height constants (WIDTH and HEIGHT). The second constructor allows specifying a particular position and dimensions, which is useful when creating sub-quadrants during space division.

### Managing Children and Shapes

The Quadtree can contain children, which are themselves instances of Quadtree, allowing for recursive space subdivision. I included methods to add children (AddChild) and to count the shapes in each quadrant (CountShape). The Contains method checks if a given position is inside the bounds of the quadtree, and the AddShape method adds new shapes.

### Division and Optimization

The Divide method divides the quadtree into four sub-quadrants, each being a new Quadtree instance. This allows distributing shapes more efficiently and reduces the number of checks needed to detect collisions. Another method, Divide_1, can be used for specific divisions or additional optimizations.

### Shape Retrieval

The Retrieve method retrieves all the shapes contained in the quadtree and its children, which is crucial for performing collision checks on a subset of the shapes present in the space. This significantly improves performance by reducing the number of comparisons to make.

### Conclusion

The Quadtree class is a critical component of my physics engine, enabling efficient object management and fast collision detection. By recursively dividing the space and organizing shapes into quadrants, the quadtree optimizes simulation performance, ensuring a smoother and more responsive experience.

---

## Introduction to the Graphics Class

To render shapes and handle display in my physics engine, I developed the Graphics class. This class uses SDL2 to draw various geometric shapes and display the quadrants of the Quadtree structure. Here is a brief explanation of its functionalities and role within the engine.

### Initialization and Configuration

The Graphics class is initialized with an SDL_Renderer that handles the rendering of objects to the screen. I added a SetDrawColor method that allows setting the drawing color by specifying RGBA values. This makes it easy to change the color of different shapes being drawn.

### Drawing Shapes

I implemented several methods to draw specific shapes:
- DrawSquare: This method takes a Shape object representing a square and draws it on the screen.
- DrawRec: Similar to DrawSquare, but for rectangles.
- DrawShape: A generic method that decides which type of shape to draw based on the attributes of the Shape object.

### Managing Circles and Polygons

To draw circles and polygons, I included specific methods:
- initializeCircleVertices: Initializes the vertices needed to draw a circle.
- updateCirclePosition: Updates the position of the circle's vertices based on its new position.
- initializePolygonVertices and updatePolygonPosition: Similar functions for polygons, allowing for initialization and updating their vertices.

### Rendering the Quadtree

To visualize the Quadtree structure, I added a DrawQuadtree method. This method draws the boundaries of each quadrant, which is useful for debugging and optimizing collision management. The depth parameter controls how deep the quadrants are drawn.

### Final Rendering

The render method is called to update the display and draw all the shapes on the screen. It ensures that all drawing operations are completed before refreshing the window.

### Conclusion

The Graphics class is essential for visual rendering in my physics engine. It provides drawing functionalities for different geometric shapes and allows for visualizing the Quadtree structure, thus aiding the development and debugging of the engine. Thanks to SDL2, the rendering is both efficient and flexible, meeting the needs of the project.

---

## Introduction to the Collider Class

To manage collisions between objects in my physics engine, I developed the Collider class. This class checks collisions between various geometric shapes as well as with the window boundaries. It plays a crucial role in maintaining the integrity of physical simulations. Here is an overview of its key functionalities.

### Managing Collisions with the Window

The CheckCollideWindow method checks if a given shape collides with the window's edges. This prevents objects from going off-screen, adjusting their position or velocity as necessary.

### Shape-to-Shape Collision Detection

The CheckCollision method checks if two given shapes, shapeA and shapeB, are colliding. It uses the properties of the shapes (such as their position and size) to determine if there is an overlap between them.

### Handling Object Collisions

The CheckCollideShapes method iterates over a list of shapes and checks for collisions between them. This allows handling physical interactions between multiple objects in the simulation. Additionally, the CheckCollideShapesNoWindow method performs a similar check, excluding the boundary check.

### Conclusion

The Collider class is crucial for the collision management in my physics engine. By checking collisions between shapes and handling interactions with the window boundaries, it ensures that the physical simulation remains accurate and responsive. The Collider class optimizes the process of detecting and resolving collisions, helping maintain the stability of the simulation.
 lala 