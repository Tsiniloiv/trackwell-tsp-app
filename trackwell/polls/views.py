import json
from django.shortcuts import render
from django.http import HttpResponse
import mlrose
import numpy as np

coords_list = [
	(279.900000, 162.300000 ),
	(163.400000, 307.200000),
	(155.900000, 190.600000),
	(370.600000, 756.300000),
	(212.500000, 626.100000),
	(316.300000, 641.600000),
	(397.100000, 753.100000),
	(223.400000, 738.200000),
	(267.300000, 633.700000),
	(286.300000, 597.900000),
	(83.100000, 39.100000),
	(65.900000, 609.700000),
	(193.200000, 301.300000),
	(0.000000, 222.300000),
	(202.500000, 460.200000),
	(141.400000, 552.000000),
	(110.000000, 609.100000),
	(266.600000, 0.000000),
	(376.900000, 723.800000),
	(329.500000, 323.500000),
	(144.300000, 672.400000),
	(335.900000, 447.300000),
	(517.400000, 760.100000 ),
	(324.800000, 517.500000),
	(471.300000, 772.200000),
	(266.400000, 469.600000),
	(187.500000, 688.800000),
	(217.200000, 518.900000),
	(444.800000, 759.800000),
	(220.600000, 1.300000),
	(298.300000, 679.700000),
	(259.600000, 545.800000),
	(118.800000, 459.800000),
	(358.000000, 745.200000),
	(279.100000, 753.500000),
	(355.100000, 589.000000),
	(449.600000, 734.200000),
	(488.900000, 727.000000),
	(281.900000, 347.400000),
	(13.000000, 497.500000),
	(99.600000, 66.500000),
	(74.600000, 316.700000),
	(203.900000, 110.200000),
	(231.200000, 429.700000),
	(458.500000, 775.200000),
	(480.900000, 754.500000),
	(125.800000, 725.500000),
	(322.900000, 749.900000)
]

def findSolution():
	fitness_coords = mlrose.TravellingSales(coords = coords_list)
	problem_fit = mlrose.TSPOpt(length = 48, fitness_fn = fitness_coords, maximize = False)
	best_state, best_fitness = mlrose.genetic_alg(problem_fit, mutation_prob = 0.2, max_attempts = 100, random_state = 2)
	json_response = json.dumps({"bestState": best_state.tolist(), "bestFitness": best_fitness.tolist()})
	print(json_response)
	return json_response

def index(request):
	print("Request received!")
	response = HttpResponse(findSolution())
	response["Access-Control-Allow-Origin"] = "*"
	return response