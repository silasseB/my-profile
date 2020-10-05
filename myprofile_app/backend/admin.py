from django.contrib import admin
from .models import Home, Profile
# Register your models here.


class HomeAdmin(admin.ModelAdmin):
    fields =['description', 'background_pic']

admin.site.register(Home, HomeAdmin)


class ProfileAdmin(admin.ModelAdmin):
    fields =['profile_pic', 'about']

admin.site.register(Profile, ProfileAdmin)
