---
title: 'Shader Dynamique pour Sprites Animés'
description: 'Un shader animé avec des couleurs arc-en-ciel et des sprites en mouvement pour des effets visuels dynamiques.'
pubDate: '2024-12-19'
heroImage: '/namakemono.jpg'
---

## Résumé

1. [Présentation du Shader](#présentation-du-shader)
2. [Détails du Code](#détails-du-code)
    - [Fonction `rand`](#fonction-rand)
    - [Fonction `rainbow`](#fonction-rainbow)
    - [Calcul des Positions des Sprites](#calcul-des-positions-des-sprites)
    - [Mélange des Couleurs et Animation](#mélange-des-couleurs-et-animation)
3. [Conclusion](#conclusion)

---

<video controls style="width: 100%; height: auto;">
  <source src="/test3.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

---

## Présentation du Shader

Dans ce post, je vais expliquer comment j'ai créé un shader dynamique qui génère des sprites animés avec un effet de couleur arc-en-ciel. Chaque sprite se déplace légèrement de manière aléatoire et change de couleur au fil du temps, créant un effet visuel attrayant pour des applications graphiques en temps réel. Ce shader utilise GLSL et repose sur des principes de base comme la manipulation des positions et des couleurs à l’aide du temps.

## Détails du Code

### Fonction `rand`

La fonction `rand` génère une valeur pseudo-aléatoire basée sur un vecteur d'entrée. Elle utilise des fonctions mathématiques comme `sin` et `dot` pour produire un bruit qui permet de décaler légèrement la position des sprites, afin d'éviter qu'ils ne soient trop réguliers dans leur disposition.

```glsl
float rand(vec2 co) {
    float timeSeed = iTime * 1000.0;
    return fract(sin(dot(co , vec2(12.9898, 78.233))) * 43758.5453);
}



### Fonction rainbow(float t)
La fonction rainbow génère un dégradé de couleurs basé sur le temps t. Elle utilise une combinaison de valeurs trigonométriques pour créer un effet de cycle de couleurs arc-en-ciel. Cela ajoute un effet dynamique aux sprites, qui changent de couleur au fur et à mesure que le temps avance.

```glsl
vec3 rainbow(float t) {
    return 0.5 + 0.5 * cos(t + vec3(0.0, 2.0, 4.0));
}
```

### La Fonction mainImage
C'est ici que la magie opère. La fonction mainImage est responsable de l'affichage des sprites. Le fragment shader prend les coordonnées de l'écran (dans fragCoord) et les normalise en coordonnées de texture avec uv. Ensuite, il définit le nombre de sprites à afficher sur l'axe x et y avec les variables numSpritesX et numSpritesY.

```glsl
vec2 uv = fragCoord.xy / iResolution.xy;
int numSpritesX = 10;
int numSpritesY = 10;
```

Le temps est également utilisé pour animer les sprites avec `frame = floor(mod(iTime * 10.0, 6.0));`, ce qui crée une animation en fonction du temps. Le `frame` permet de changer les sprites au fur et à mesure que le temps passe, en leur donnant une sensation de changement d'état.

### Position des Sprites et Déplacement Aléatoire
Les positions des sprites sont calculées dans la boucle imbriquée pour les axes x et y. La position initiale est déterminée par les coordonnées de la grille, mais j'ajoute une composante aléatoire pour que chaque sprite ait un petit décalage. De plus, chaque sprite se déplace au fil du temps avec un effet sinusoïdal, ce qui donne un mouvement fluide.

```glsl
vec2 spritePos = vec2(float(x) * spacingX, float(y) * spacingY);
vec2 randomOffset = vec2(rand(vec2(float(x), float(y))), rand(vec2(float(x) + 1.0, float(y) + 1.0)));
spritePos += randomOffset * spacingX;
spritePos.x += sin(iTime * 5.0 + float(x)) * 0.18;
spritePos.y += sin(iTime * 5.0 + float(y)) * 0.18;
```

### Mélange des Couleurs et Animation
Ensuite, je mélange la couleur de base avec celle du sprite. J'utilise l'effet arc-en-ciel généré précédemment pour créer une traînée colorée. Cette traînée suit les sprites à mesure qu'ils se déplacent. Le calcul de l'alpha permet de mélanger progressivement les couleurs du sprite avec la couleur d'arrière-plan, tout en prenant en compte la transparence des pixels du sprite.

```glsl
float rainbowTime = iTime + length(spritePos);  
vec3 rainbowColor = rainbow(rainbowTime * 0.5); 
vec3 trailColor = rainbowColor * 0.6; 
baseColor.rgb = mix(baseColor.rgb, trailColor, 0.5);
```

L'effet arc-en-ciel est combiné avec la couleur du sprite à chaque étape de l'animation, ce qui donne une sensation de mouvement fluide et coloré.

## Résultat Final
Le résultat final est une grille de sprites animés qui se déplacent légèrement tout en affichant un dégradé arc-en-ciel dynamique. Cela crée un effet visuel intéressant et vibrant, avec des couleurs qui évoluent lentement au fur et à mesure que le temps passe.

## Conclusion
Ce shader est un excellent exemple de la façon dont on peut manipuler les couleurs et les positions des objets en temps réel dans un shader GLSL. En utilisant des fonctions comme rand, sin, et cos, on peut obtenir des effets visuels fluides et dynamiques qui réagissent au temps et à l'environnement. Cela offre une grande flexibilité pour créer des animations et des effets intéressants dans les applications graphiques en temps réel.
