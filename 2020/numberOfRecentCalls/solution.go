package main

import "container/list"

/** The traditional implementation of this solution probably suggests building a queue. However, I found enforcing the queue logic to be a significant time penalty:
Runtime: 144 ms
Memory Usage: 9.4 MB

Alternatively, by only tracking the index where the queue should start and keeping the values as an list, I found saved 10% on processing and memory usage. ¯\_(ツ)_/¯
Runtime: 124 ms
Memory Usage: 8.1 MB
*/

type RecentCounter struct {
	hitMap     []int
	startIndex int
}

func Constructor() RecentCounter {
	counter := RecentCounter{}
	counter.hitMap = []int{}
	counter.startIndex = 0
	return counter
}

func (this *RecentCounter) Ping(t int) int {
	minTS := t - 3000
	this.hitMap = append(this.hitMap, t)
	for this.hitMap[this.startIndex] < minTS {
		this.startIndex++
	}
	return len(this.hitMap) - this.startIndex
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */

////////////////////////////////////////////////////////
// QUEUE - LIST IMPLEMENTATION
////////////////////////////////////////////////////////

type RecentCounter struct {
	hitMap *list.List
}

func Constructor() RecentCounter {
	counter := RecentCounter{}
	counter.hitMap = list.New()
	return counter
}

func (this *RecentCounter) Ping(t int) int {
	minTS := t - 3000

	this.hitMap.PushBack(t)
	firstEl := this.hitMap.Front()
	for firstEl.Value.(int) < minTS {
		this.hitMap.Remove(firstEl)
		firstEl = this.hitMap.Front()
	}

	return this.hitMap.Len()
}
