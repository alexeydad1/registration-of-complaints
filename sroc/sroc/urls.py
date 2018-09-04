from django.urls import path, include
from django.contrib import admin

from rest_framework import routers
from complaints import rest as complaintsAPI

admin.autodiscover()

restrouter = routers.DefaultRouter()

complaintsAPI.register(restrouter)


urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api/ui-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include('frontend.apiurls')),
    path('api/', include(restrouter.urls)),
]