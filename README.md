# Seidor Teste Técnico

O intuito desse teste é construir uma API de reverva de carro dispondo de algumas regras de negócios.

## Entidades

### Automóvel

1. Placa.
2 Cor.
3. Marca.

### Motorista

1. Nome.

### Reserva (Não implementado)

1. Data de início.
2. Data de finalização.
3. Nome do motorista.
4. Automóvel utilizado.
5. Motivo de utilização.

## Tecnologias utilizadas

![Docker](https://img.shields.io/badge/Docker-20.10.12-blue) ![Typescript](https://img.shields.io/badge/Typescript-4.5.5-blue) ![NodeJS](https://img.shields.io/badge/NodeJS-16.13.1-green) ![Express](https://img.shields.io/badge/Express-4.17.2-green) ![TypeORM](https://img.shields.io/badge/TypeORM-0.2.41-orange)

## Consumindo a API

Estou deixando dentro do projeto um arquivo chamado ``Insomnia_2022_01_31.json`` que é uma exportação de todas as rotas implementadas no projeto. Também recomendo usar o Insomnia para fazer a importação do arquivo. Colocarei as rotas descritas aqui para que os teste possam ser feitos em outros programas.

### Recurso de Carros

1. POST - ``http://localhost:3333/cars``. (createCar)
```json
{
	"color": "Black",
	"licencePlate": "ISP180",
	"carBrand": "BMW"
}
```
2. GET - ``http://localhost:3333/cars``. (listCars)

3. GET - ``http://localhost:3333/cars/:id``. (getCar)
```id = licencePlate```
4. PATCH - ``http://localhost:3333/cars/:id``. (updateCar) ```id = licencePlate```
5. DELETE - ``http://localhost:3333/cars/:id``. (deleteCar) ```id = licencePlate```

### Recurso Motoristas

1. POST - ```http://localhost:3333/drivers```. (createDriver)
```json
{
	"name": "Gustavo"
}
```

2. GET - ```http://localhost:3333/drivers```. (listDrivers)

3. GET - ``http://localhost:3333/drivers/:id``. (getDriver) ``id = id``
4. PATCH - ``http://localhost:3333/drivers/:id``. (updateDriver)``id = id``
5. DELETE - ``http://localhost:3333/drivers/:id``. (deleteDriver) ``id = id``





