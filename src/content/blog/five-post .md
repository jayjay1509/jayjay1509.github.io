---
title: 'Bomb System – Unreal Engine'
description: 'Implementation of an interactive and modular bomb system in Blueprint'
pubDate: '2026-03-20'
heroImage: '/bomb.jpg'
---

## Summary

1. [Overview](#overview)
2. [Explosion Detection](#explosion-detection)
3. [Interaction System](#interaction-system)
4. [Visual Effects](#visual-effects)
5. [Global Workflow](#global-workflow)
6. [Improvements](#improvements)

---

![Bomb Blueprint](/bomb_blueprint.png)

---

## Overview

For this project, I developed a bomb system in Blueprint with the goal of creating an explosion that actually interacts with the game world, not just a visual effect.

The idea was to build something flexible and easy to extend, so I can add new behaviors later without having to rewrite everything.

When a bomb explodes, it detects nearby actors and applies different reactions depending on their behavior.

---

## Explosion Detection

When the bomb is triggered, I retrieve all actors within a defined area around it.

These actors are then processed one by one. This allows me to handle multiple types of objects without relying on a rigid system.

During development, I used debug messages to display detected actors. This helped me validate that the explosion radius was correct and that no objects were missed.

---

## Interaction System

To handle interactions, I use a combination of casting and interfaces.

Casting is useful when I want to trigger a very specific behavior on certain objects. However, relying only on casting creates strong dependencies between classes.

To solve this, I implemented interfaces.

With this approach, any object can react to an explosion simply by implementing the correct interface. This keeps the system modular and avoids modifying the core logic when adding new interactable elements.

---

## System Robustness

Before interacting with any object, I always check if it is valid.

Since objects can be destroyed or modified during runtime, this prevents crashes and unexpected behavior.

This is especially important in a dynamic system like explosions where multiple objects can change state at the same time.

---

## Visual Effects

When the bomb explodes, a visual effect is spawned at its location.

The effect automatically activates and destroys itself after a short time, which avoids unnecessary memory usage.

I also scale the effect based on the explosion radius to keep visual consistency with gameplay. This makes it easier for the player to understand the impact area.

---

## Global Workflow

The system follows this pipeline:

- The bomb is triggered
- Nearby actors are detected
- Each actor is processed
- A reaction is applied (casting or interface)
- The visual effect is spawned
- Everything cleans up automatically

---

## Improvements

The system works well, but there are still improvements that could be made.

For example, I could reduce the use of casting and rely entirely on interfaces to make the system cleaner.

Another improvement would be adding distance-based attenuation, so objects closer to the explosion are more affected than those further away.

I could also optimize actor detection for larger scenes or add chain reactions between objects to create more dynamic gameplay.

---

## Conclusion

This bomb system provides a solid foundation for handling dynamic interactions in the game.

It is simple, modular, and easy to extend. New behaviors can be added without modifying the core system, which is essential for maintaining scalability in a game project.