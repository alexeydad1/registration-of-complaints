from rest_framework import viewsets, routers, serializers
from django.contrib.auth.models import User
from .models import Complaints, Status


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('id', 'name')


class ComplaintsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Complaints
        fields = ('id', 'created', 'operator', 'email', 'phone', 'status', 'text', 'service_comment')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'is_superuser')


class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer


class ComplaintsViewSet(viewsets.ModelViewSet):
    queryset = Complaints.objects.all()
    serializer_class = ComplaintsSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def register(restrouter):
    restrouter.register(r'status', StatusViewSet)
    restrouter.register(r'complaints', ComplaintsViewSet)
    restrouter.register(r'users', UserViewSet)