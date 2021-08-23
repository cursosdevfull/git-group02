# Comandos Git

## Para crear un repositorio local

```
git init
```

## Revisar el estado de los archivos

```
git status
```

## Monitorear los archivos

```
git add comandos.md
git add .
```

## Confirmar archivos

```
git commit
git commit -m "Inicio de Git"
```

## Listar los commits

```
git log
```

## Agregar credenciales

```
git config user.name "Sergio"
git config user.email "sergio@gmail.com"
git config --global user.name "Sergio"
git config --global user.email "sergiohidalgocaceres@gmail.com"
```

## Editar configuración de git

```
git config -e
git config --global -e
```

## Almacenamiento temporal

```
git stash save "copia temporal"
```

## Para listar stash

```
git stash list
```

## Recuperar un stash

```
git stash pop 0
```

## Para crear ramas

```
git branch nombreRama
```

## Para cambiar de rama

```
git checkout nombreRama
```

## Para crear una rama y cambiar a esa rama

```
git checkout -b nombreRama
```

## Para crear un merge

```
git merge nombreRamaACombinar
```

> _Tienen que estar en la rama sobre la cual se hará la combinación_

## Para crear un rebase

```
git rebase ramaDestino ramaOrigen
```

## Para regresar a un commit usando posiciones relativas

```
git checkout HEAD^
git checkout HEAD~5
```

## Para eliminar commits (solo si no están compartidos con el repositorio remoto)

```
git reset HEAD~
git reset --hard HEAD~5
```

## Para eliminar commits (si están compartidos con el repositorio remoto)

```
git revert HEAD
git revert --no-commit HEAD~6..HEAD
```

## Para mover commits

```
git cherry-pick <commit> ... <commit>
```

## Para agregar tags

```
git tag "v.1.0.0" 2aa66
```

## Para revisar el log

```
git log
git log --oneline
git log --pretty
```

## Para agregar cambios al último commit

```
git commit --amend
```
