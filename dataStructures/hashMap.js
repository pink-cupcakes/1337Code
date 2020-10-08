const keyToHash = (key, arrLen) => {
	let hashedKey = 0;
	for(let i = 0; i < key.length; i++) {
		hashedKey += key.charCodeAt(i)
	};

	res = hashedKey % arrLen

	return res
}

class HashMap {
	constructor() {
		this.arr = [],
		this.arrLen = 10
	}

	AddKeyValue(key, val) {
		let newNode = new Node(key, val)

		let keyIndex = keyToHash(key, this.arrLen);

		if (this.arr[keyIndex] == undefined) {
			let linkedList = new LinkedList(newNode)
			this.arr[keyIndex] = linkedList;
			return
		} else {
			let keyList = this.arr[keyIndex]
			let head = keyList.GetLinkHead();
			while(head != null) {
				if(head.Key == key) {
					head.Val = val;
					return;
				};

				head = head.GetNextNode();
			};

			head.AddNextNode(newNode);
		};
	};

	GetKeyValue(key) {
		let keyIndex = keyToHash(key, this.arrLen);
		
		let keyList = this.arr[keyIndex];
		if (keyList == undefined) {
			return
		}

		let keyListNode = keyList.GetLinkHead();
		while(keyListNode.Key != key) {
			if (keyListNode.Next == null) {
				return 'Key not found';
			};

			keyListNode = keyListNode.GetNextNode;
		};

		return keyListNode.Val;
	};
};

class LinkedList {
	constructor(node) {
		this.head = node,
		this.last = node,
		this.length = 1
	};

	AddLinkEnd(node) {
		this.last.AddNextNode(node);
		this.last = this.last.GetNextNode();
		this.length += 1;
	};

	GetLinkLength() {
		return this.length;
	};

	GetLinkHead() {
		return this.head;
	};
};

class Node {
	constructor(key, value) {
		this.Key = key,
		this.Val = value,
		this.Next = null
	};

	GetNextNode() {
		return this.Next
	};

	AddNextNode(node) {
		this.Next = node
	};

	DeleteNextNode() {
		this.Next = null
	};
};

(() => {
	test = new HashMap();

	test.AddKeyValue('a', 5);
	test.AddKeyValue('b', 2);
	test.AddKeyValue('a', 3);
	test.AddKeyValue('sometest', 'alpha');
	test.AddKeyValue('testzz', 4);
	test.AddKeyValue('b', 1)

	console.log(test.GetKeyValue('a'));
	console.log(test.GetKeyValue('b'));
	console.log(test.GetKeyValue('sometest'));
})()