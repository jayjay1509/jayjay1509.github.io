---
title: 'Third post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '/shader.png'
---

---

<video controls style="width: 100%; height: auto;">
  <source src="/shader1.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>

---




## Créer un Shader Dynamique avec une Palette de Couleurs
Dans ce post, je vais vous expliquer un shader que j'ai créé pour générer un effet visuel dynamique basé sur une palette de couleurs et un déplacement circulaire. Ce shader utilise GLSL pour afficher des motifs lumineux et colorés qui se déplacent en fonction du temps, créant un effet visuel fluide et vibrant.

### Comprendre le Shader
Le but principal de ce shader est de créer une animation où une couleur change en fonction de la distance par rapport à un point central, et qui évolue au fil du temps. Examinons les différentes parties du code.

## Fonction palette(float t)
La fonction palette génère une couleur dynamique basée sur la valeur de t. Elle utilise des fonctions trigonométriques pour créer une variation de couleur fluide et continue, créant ainsi un effet de cycle de couleurs qui varie selon le temps.

```glsl
vec3 palette(float t)  //I was inspired by ianlieberman07 
{
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);
    return a + b * cos(6.28318 * (c * t + d));
}
```
Cette fonction produit un effet visuel qui varie entre différentes teintes de couleurs au fur et à mesure que le temps évolue.

## Fonction mainImage
La fonction mainImage est responsable de l'affichage du shader. Elle prend en compte les coordonnées de chaque pixel à l'écran et applique l'animation définie par le shader. La position des pixels est modifiée en fonction du temps, créant un mouvement fluide de l'effet.

```glsl
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    
    uv.x *= iResolution.x / iResolution.y;
    
    float time = iTime *  5.0;
    
    vec2 pos = mod(uv * 10.0 + time, 1.0) - 1.8;
    
    float dist = length(pos);
    
    vec3 color = palette(dist + time);
    
    float glow = smoothstep(1.1, 1.1, 6.5 - dist);
    
    color *= glow;
    
    fragColor = vec4(color, 1.0);
}
```
## Détails de la fonction mainImage
Les coordonnées de chaque pixel sont normalisées par fragCoord / iResolution.xy.
La variable time est utilisée pour animer le shader et faire bouger l'effet.
Le calcul mod(uv * 10.0 + time, 1.0) permet de créer un motif circulaire animé.
La distance par rapport au centre est calculée avec length(pos), ce qui permet de créer un effet de "pulsation" autour du centre.
La fonction smoothstep est utilisée pour adoucir la transition de l'effet de lumière à la périphérie du cercle, donnant l'illusion d'un "glow".
Résultat Final
Le résultat final est un motif dynamique de couleurs qui change au fur et à mesure que le temps passe. Les couleurs varient selon la distance des pixels par rapport au centre et évoluent dans un cycle fluide.

## Conclusion
Ce shader est un excellent exemple de l'utilisation de fonctions trigonométriques et de la manipulation de la position des pixels pour créer des effets visuels animés en temps réel. Grâce à la fonction palette, on peut facilement obtenir un effet de dégradé de couleurs fluide et dynamique. Ce type d'effet peut être utilisé dans diverses applications graphiques, comme des arrière-plans animés, des effets de lumière, ou même des jeux.