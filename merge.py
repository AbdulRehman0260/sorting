# merge alogorithm
import numpy as np
import pandas as pd

def mergesort(array):

    mid = len(array)//2
    left = array[0:mid]
    right = array[mid:len(array)]
    
    if len(array) == 1:
        return array
    else:
        mergesort()