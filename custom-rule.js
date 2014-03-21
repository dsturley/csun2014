function evaluateNodes(nodes, optionValue) {

	var violations = [];
	for (var i = 0; i < nodes.length; i++) {
		if (felib.dom.isVisible(nodes[i], true)) {
			violations.push({
				node: nodes[i],
				additionalInfo: '',
				relatedNodes: []
			});
		}
	}

	return violations;
}