from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController
import random

# Initialisation de l'application
app = Ursina()

# Création du sol
ground = Entity(model='plane', texture='grass', collider='box', scale=(50,1,50))

# Création des blocs
def add_block(position):
    block = Button(parent=scene, model='cube', color=color.white, position=position, texture='white_cube', collider='box')
    return block

# Génération d'un petit terrain
blocks = []
for x in range(10):
    for z in range(10):
        blocks.append(add_block((x, 0.5, z)))

# Ajout du joueur en vue FPS
player = FirstPersonController()

# Ajout de Herobrine
herobrine = Entity(model='cube', color=color.red, position=(5, 1, 5), texture='white_cube', collider='box')

def update():
    # Faire apparaître et disparaître Herobrine de façon mystérieuse
    if random.random() < 0.01:
        herobrine.visible = not herobrine.visible

# Lancer le jeu
app.run()
