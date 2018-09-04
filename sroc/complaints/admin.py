from django.contrib import admin

from .models import Complaints, Status


admin.site.register(Complaints)
admin.site.register(Status)