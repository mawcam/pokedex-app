# Pokedex App

This is a Pokedex application that allows users to explore various Pokémon from the [PokeAPI](https://pokeapi.co/), view detailed information about each Pokémon, and manage a personalized Pokedex of captured Pokémon.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Development Guidelines](#development-guidelines)

## Features

- **Listing Page**: Displays all Pokémon fetched from the PokeAPI, with a search functionality to quickly find specific Pokémon.
- **Details Page**: Provides detailed information about each Pokémon, including attributes, stats, and images.
- **Pokedex Page**: Shows the list of Pokémon that the user has caught.

## Technologies Used

- **Frontend**: React, Vite
- **Styling**: Material UI, Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Code Quality**: Prettier, ESLint (with `eslint-plugin-simple-import-sort` for sorting imports)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
  git clone https://github.com/mawcam/pokedex-app.git
  cd pokedex-app
```

2. **Install dependencies:**

```bash
  npm install
```

3. **Start the development server:**

```bash
  npm run dev
```

4. **Open the app in your browser:**

```
  http://localhost:5173
```

## Usage

Once the development server is running, you can navigate through the following pages:

- **Listing Page**: View and search Pokémon.
- **Details Page**: Click on any Pokémon from the listing to see its detailed stats and images.
- **Pokedex Page**: Track the Pokémon you've caught.

## Development Guidelines

To maintain code quality and consistency:

- Ensure that all code adheres to the Prettier formatting rules.
- Follow the import order guidelines enforced by ESLint and `eslint-plugin-import`.
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.
- For any new features or bug fixes, create a branch and submit a pull request with a detailed description of changes.
