from django.urls import path

from .views import (
    home,
    trainer
)

urlpatterns = [
    path('', home, name='home'),
    path('trainer/', trainer, name='trainer'),
]
