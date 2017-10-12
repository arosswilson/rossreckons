#!/bin/sh
echo "activating virtual env"
source "./env/bin/activate"

echo "setting local config"
export ROSSRECKONS_CONFIG="/Users/rosswilson/.config/rossreckons_config.json"

echo "setting django settings module"
export DJANGO_SETTINGS_MODULE="rossreckons.settings.local"

echo "starting django server"
exec python manage.py runserver