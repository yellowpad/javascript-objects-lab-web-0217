const recipes = { "recipe" : "ingredients" }

function updateObjectWithKeyAndValue(object, key, value) {

	var ob = Object.assign({}, object)

	ob[key] = value

	return ob
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
	
	object[key] = value

	return object

}

function deleteFromObjectByKey(object, key) {


	var new_ob = Object.assign({}, object)
	
	delete new_ob[key]

	return new_ob
}

function destructivelyDeleteFromObjectByKey(object, key) {

	delete object[key]

	return object
}