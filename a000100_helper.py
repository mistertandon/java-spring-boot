from ppretty import ppretty


def print_variable_type(var):
    print(type(var))


def print_object(obj):
    
    print(ppretty(obj, show_address=False, indent='   ',
              show_properties=True, show_static=True, show_protected=True, seq_length=20, depth=10))
    
    return True

