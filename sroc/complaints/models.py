from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Status(models.Model):
    name = models.CharField(verbose_name='Название', unique=True, max_length=128)

    class Meta:
        verbose_name = 'Статус обращения'
        verbose_name_plural = 'Статусы обращений'
        ordering = 'name',

    def __str__(self):
        return f'{self.name}'


class Complaints(models.Model):
    created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')
    operator = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Оператор')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(verbose_name='Телефон', max_length=11)
    status = models.ForeignKey(Status, on_delete=models.CASCADE, verbose_name='Статус')
    text = models.TextField(verbose_name='Текст обращения')
    service_comment = models.TextField(verbose_name='Служебный комментарий')

    class Meta:
        verbose_name = 'Обращение'
        verbose_name_plural = 'Обращения'
        ordering = '-created',

    def __str__(self):
        return f'{self.email} ({self.phone})'