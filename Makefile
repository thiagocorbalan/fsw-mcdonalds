setup:
	@echo "Creating network..."
	@docker network ls | grep fsw || docker network create --driver bridge fsw
	@echo "Creating database..."
	@docker volume ls | grep fsw_volume_data || docker volume create --name=fsw_volume_data


build:
	@echo "Building network..."
	@docker-compose build

start: setup build
	@echo "Iniciando..."
	@docker-compose up -d

restart: stop start

logs:
	@docker-compose logs -f

stop:
	@echo "Parando..."
	@docker-compose down