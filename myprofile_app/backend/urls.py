
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from backend.views import index, IndexView, MessageView
 

app_name = 'retrive_apis'

urlpatterns = [
    path("", index, name='index'),
    path('index/', IndexView.as_view(), name='index'),
    path('send/message/', MessageView.as_view(), name='send-message'),
   
]

if settings.DEBUG:
    
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
