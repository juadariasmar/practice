#NO ELIMINAR LAS SIGUIENTES IMPORTACIONES, sirven para probar tu código en consola, y el funcionamiento del módulo csv respectivamente
from pruebas import pruebas_codigo_estudiante
import csv
"""NOTAS: 
    -PARA ESTE RETO PUEDES PROBAR TU PROGRAMA, DANDO CLICK EN LA NAVE ESPACIAL
    -LA CONSOLA TE DARÁ INSTRUCCIONES SI PUEDES EVALUAR O NO TU CÓDIGO
"""


"""Inicio espacio para programar funciones propias"""
#En este espacio podrás programar las funciones que deseas usar en la función solución (ES OPCIONAL)



"""Fin espacio para programar funciones propias"""

def solucion():
    #ESTA ES LA FUNCIÓN A LA QUE LE DEBES GARANTIZAR LOS RETORNOS REQUERIDOS EN EL ENUNCIADO.
    with open('MSFT.csv') as microsoft:
        with open('analisis_archivo.csv', 'w', newline = '') as ar_solucion:
            reader_microsoft = csv.reader(microsoft)
            writer_solucion = csv.writer(ar_solucion, delimiter = '\t')
            data_solucion = [['Fecha', 'Mean-Min-Max', 'Concepto']]
            
            for i, renglon_microsoft in enumerate(reader_microsoft):
                if i == 0:
                    continue
                elif i == 1:
                    date_lowest = renglon_microsoft[0]
                    lowest_value = float(renglon_microsoft[3])
                    
                    date_highest = renglon_microsoft[0]
                    highest_value = float(renglon_microsoft[2])
                    
                    
                if lowest_value > float(renglon_microsoft[3]):
                    date_lowest = renglon_microsoft[0]
                    lowest_value = float(renglon_microsoft[3])
                    
                if highest_value < float(renglon_microsoft[2]):
                    date_highest = renglon_microsoft[0]
                    highest_value = float(renglon_microsoft[2])
                    
                promedio = (float(renglon_microsoft[2]) + float(renglon_microsoft[3])) / 2
                
                lista_auxiliar = [renglon_microsoft[0], promedio]
                
                if promedio < 207:
                    lista_auxiliar.append('MUY BAJO')
                    
                elif promedio < 221:
                    lista_auxiliar.append('BAJO')
                    
                elif promedio < 235:
                    lista_auxiliar.append('MEDIO')
                    
                elif promedio < 249:
                    lista_auxiliar.append('ALTO')
                    
                elif promedio >= 249:
                    lista_auxiliar.append('MUY ALTO')
                
                data_solucion.append(lista_auxiliar)
            
            writer_solucion.writerows(data_solucion)
            
            
    return date_lowest, lowest_value, date_highest, highest_value

"""
NO COLOCAR CÓDIGO FUERA DE LAS FUNCIONES QUE USTED CREE
Esta línea de código que sigue permite saber si su solución al ejercicio es correcto
Por favor NO ELIMINARLA, NO MODIFICARLA
"""
pruebas_codigo_estudiante(solucion)
