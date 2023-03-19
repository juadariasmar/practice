#NO ELIMINAR LA SIGUIENTE IMPORTACIÓN, sirve para probar tu código en consola
from pruebas import pruebas_codigo_estudiante

#NOTA: PARA ESTE RETO PUEDES PROBAR TU PROGRAMA, DANDO CLICK EN LA NAVE ESPACIAL
#LA CONSOLA TE DARÁ INSTRUCCIONES SI PUEDES EVALUAR O NO TU CÓDIGO

#En este espacio podrás programar las funciones que deseas usar en la función solución (NO ES OBLIGATORIO CREAR OTRAS FUNCIONES)
"""Inicio espacio para programar funciones propias"""



#PUEDES PROGRAMAR CUANTAS FUNCIONES DESEES 



"""Fin espacio para programar funciones propias"""

def calculadora(bits1, bits2, OP):
    
    
    #PROGRAMA ACÁ LA SOLUCIÓN
    resultado = ''
    
    if OP.lower()=='and':
        for i in range (len(bits1)):
            resultado+=str(int(bits1[i]) & int(bits2[i]))
            
    if OP.lower()=='or':
        for i in range(len(bits1)):
            resultado+=str(int(bits1[i]) | int(bits2[i]))
            
    if OP.lower()=='xor':
        for i in range(len(bits1)):
            resultado+=str(int(bits1[i]) ^ int(bits2[i]))
    
    
    
    return resultado

"""
Esta línea de código que sigue, permite probar si su ejercicio es correcto
"""
#NO ELIMINAR LA SIGUIENTE LÍNEA DE CÓDIGO
pruebas_codigo_estudiante(calculadora)
