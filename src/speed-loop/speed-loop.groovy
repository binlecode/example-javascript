


def cycles = 1000000000

def start = new Date().time

for (def i = 0; i < cycles; i++) {

}

def end = new Date().time
def duration = (end - start) / 1000

println "groovy looped ${cycles} times in ${duration} seconds"

