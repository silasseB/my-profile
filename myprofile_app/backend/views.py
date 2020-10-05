from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import CreateAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework import  status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import  Message
from .serializers import IndexSerializer, MessageSerializer



@csrf_exempt
def index(request, resource=''):
	return render(request, 'index.html')


class IndexView(APIView):
	serializer_class = IndexSerializer
	permission_classes = (AllowAny,)
		
	def get(self, *args, **kwargs):
		serializer = self.serializer_class(*args, **kwargs)

		return Response(serializer.data,  status=status.HTTP_200_OK )



class MessageView(CreateAPIView):
	queryset = Message.objects.all()
	serializer_class = MessageSerializer
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		message = serializer.save()
		
		#send email message
		notification = serializer.send_message(request)
		return Response(serializer.data, status=status.HTTP_201_CREATED)
