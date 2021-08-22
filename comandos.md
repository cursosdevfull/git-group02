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
