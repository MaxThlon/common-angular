build_keycloak:
	ng build thlon-keycloak

pack_keycloak:
	cd dist/thlon-keycloak && npm pack

build_stomp:
	ng build thlon-stomp

pack_stomp:
	cd dist/thlon-stomp && npm pack

build_menu:
	ng build thlon-menu

pack_menu:
	cd dist/thlon-menu && npm pack

build_group:
	ng build thlon-group

pack_group:
	cd dist/thlon-group && npm pack

build_all: build_keycloak build_stomp build_menu build_group
