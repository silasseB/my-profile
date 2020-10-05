from django.db import models

# Create your models here.

class Home (models.Model):
	background_pic = models.ImageField(upload_to='background/', blank=True)
	description    = models.TextField(null=True, blank=True)


class Profile (models.Model):
	profile_pic = models.ImageField(upload_to='profile/', blank=True)
	about      = models.TextField(null=True, blank=True)


class Message (models.Model):
	name    = models.CharField(max_length=50, null=True, blank=True)
	email   = models.EmailField(null=True, blank=True) 
	message = models.TextField(null=True, blank=True)
	
	