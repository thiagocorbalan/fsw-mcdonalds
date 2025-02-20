setup:
	@echo "Creating network..."
	@docker network ls | grep fsw || docker network create --driver bridge fsw
	@echo "Creating database..."
	@docker volume ls | grep fsw_volume_data || docker volume create --name=fsw_volume_data


build:
	@echo "Building network..."
	@docker-compose build

start: setup build
	@docker-compose up -d
	@npm run dev