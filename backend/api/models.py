from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    link = models.URLField(default='')

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField()

    def __str__(self):
        return self.name
