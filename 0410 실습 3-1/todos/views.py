from django.shortcuts import render, redirect
from .models import Todo
from .forms import TodoForm

# Create your views here.
def index(request):
    todos=Todo.objects.all()
    if request.user.is_authenticated:
        context={'todos':todos}
        return render(request,'todos/index.html',context)
    context={'todos':todos}
    return redirect('accounts:login')

def create(request):
    if request.method == 'POST':
        form=TodoForm(request.POST, request.FILES)
        if form.is_valid():
            todo=form.save(commit=False)
            todo.user=request.user
            todo.save()
            return redirect('todos:index')
    else:
        form=TodoForm()
    
    context={'form':form}
    return render(request, 'todos/create.html', context)