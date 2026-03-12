---
title: 'Gestion de l’inventaire dans le Widget'
description: 'Comment j’ai implémenté et analysé un système d’inventaire directement dans l’interface utilisateur de mon jeu'
pubDate: 'mar 12 2026'
heroImage: '/shader.png'
---

---

<video controls style="width: 100%; height: auto;">
<source src="/inventory_demo.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

---

## Implémentation de l’inventaire dans l’interface utilisateur

Pour développer le système d’inventaire de mon jeu, j’ai choisi de gérer toute la logique directement dans le Widget de l’interface utilisateur. Cela signifie que l’ajout, la suppression et l’affichage des objets sont tous contrôlés dans ce widget.

Cette approche m’a permis de créer rapidement un inventaire fonctionnel. Le widget gère la liste des objets et utilise une Data Table pour récupérer les informations liées aux items, comme leur nom, leur icône ou leur description.

Cependant, avec le recul, je me rends compte que cette solution n’est pas la plus optimale. En effet, la logique du jeu devrait normalement être séparée de l’interface utilisateur. Idéalement, le système d’inventaire devrait être géré par une classe dédiée (par exemple dans le Player ou un composant d’inventaire) et le widget devrait seulement servir à afficher les données.

Même si mon système actuel fonctionne correctement, cette expérience m’a permis de comprendre l’importance de séparer la logique du gameplay et l’interface utilisateur. Cela rend le code plus propre, plus réutilisable et plus facile à maintenir dans un projet plus complexe.

## Leçons apprises

- **Séparation des responsabilités** : la logique de gameplay doit être indépendante de l’UI.  
- **Réutilisabilité du code** : un système centralisé est plus facile à adapter à différents types d’inventaires.  
- **Maintenance simplifiée** : corriger ou ajouter des fonctionnalités devient plus rapide et sûr.  

Cette réflexion fait partie du processus d’apprentissage et m’aidera à améliorer l’architecture de mes futurs systèmes de jeu.