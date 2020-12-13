from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Student, Store

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'email', 'contact', 'address')

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'
