from django.conf import settings
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _
from .models import *


class HomeSerializer(serializers.ModelSerializer):
		
	class Meta:
		model = Home 
		fields = '__all__'
	
class ProfileSerializer(serializers.ModelSerializer):
		
	class Meta:
		model = Profile 
		fields = '__all__'
	
class IndexSerializer(serializers.Serializer):
	home     = serializers.SerializerMethodField() 
	profile     = serializers.SerializerMethodField()

	def get_home(self, obj):
		home = Home.objects.all()
		return HomeSerializer(home, many=True).data

	def get_profile(self, obj):
		profile = Profile.objects.all()
		return ProfileSerializer(profile,  many=True).data


	
class MessageSerializer(serializers.ModelSerializer):

	class Meta:
		model = Message 
		fields = '__all__'
	
	def validate(self, attrs):

		for value in attrs:
			if not attrs[value]:
				msg = _('Please fill in all fields')
				raise serializers.ValidationError(msg)
				break

		return attrs
	

	def get_from_email(self):
		return settings.DEFAULT_FROM_EMAIL

	def render_mail(self, request=None):
		
		subject_template_name = 'message_mail_subject.txt'
		email_template_name   = 'message_mail.html'

		name = self.validated_data.get('name')
		subject   = self.validated_data.get('subject')
		message   = self.validated_data.get('message')
		email     = self.validated_data.get('email')


		subject = render_to_string(subject_template_name, {'subject':subject})
		subject = ''.join(subject.splitlines())

		context = {
			'message':message,
			'name':name,
			'emai':email,	
		}

		email_message = render_to_string(email_template_name, context)

		from_email = self.get_from_email()
		to_email = 'silassibaloy@gmail.com'
		msg = EmailMessage(subject, message, from_email, [to_email])
		msg.content_subtype = "html"  # Main content is now text/html

		return msg
		

	def send_message(self, request=None):
		msg = self.render_mail(request)
		msg.send()
