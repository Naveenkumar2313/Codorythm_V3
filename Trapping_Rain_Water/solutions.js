export const trappingRainWaterSolutions = {
  "trapping-rain-water-e1": {
    python: `def simple_water_collection(elevation):
    n = len(elevation)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if elevation[left] > leftMax:
                leftMax = elevation[left]
            else:
                totalWater += leftMax - elevation[left]
            left += 1
        else:
            if elevation[right] > rightMax:
                rightMax = elevation[right]
            else:
                totalWater += rightMax - elevation[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int simpleWaterCollection(int[] elevation) {
        int n = elevation.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevation[left] > leftMax) {
                    leftMax = elevation[left];
                } else {
                    totalWater += leftMax - elevation[left];
                }
                left++;
            } else {
                if (elevation[right] > rightMax) {
                    rightMax = elevation[right];
                } else {
                    totalWater += rightMax - elevation[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int simpleWaterCollection(int elevation[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (elevation[left] > leftMax) {
                leftMax = elevation[left];
            } else {
                totalWater += leftMax - elevation[left];
            }
            left++;
        } else {
            if (elevation[right] > rightMax) {
                rightMax = elevation[right];
            } else {
                totalWater += rightMax - elevation[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int simpleWaterCollection(vector<int>& elevation) {
        int n = elevation.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevation[left] > leftMax) {
                    leftMax = elevation[left];
                } else {
                    totalWater += leftMax - elevation[left];
                }
                left++;
            } else {
                if (elevation[right] > rightMax) {
                    rightMax = elevation[right];
                } else {
                    totalWater += rightMax - elevation[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-e2": {
    python: `def valley_water_storage(heights):
    n = len(heights)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if heights[left] > leftMax:
                leftMax = heights[left]
            else:
                totalWater += leftMax - heights[left]
            left += 1
        else:
            if heights[right] > rightMax:
                rightMax = heights[right]
            else:
                totalWater += rightMax - heights[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int valleyWaterStorage(int[] heights) {
        int n = heights.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (heights[left] > leftMax) {
                    leftMax = heights[left];
                } else {
                    totalWater += leftMax - heights[left];
                }
                left++;
            } else {
                if (heights[right] > rightMax) {
                    rightMax = heights[right];
                } else {
                    totalWater += rightMax - heights[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int valleyWaterStorage(int heights[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (heights[left] > leftMax) {
                leftMax = heights[left];
            } else {
                totalWater += leftMax - heights[left];
            }
            left++;
        } else {
            if (heights[right] > rightMax) {
                rightMax = heights[right];
            } else {
                totalWater += rightMax - heights[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int valleyWaterStorage(vector<int>& heights) {
        int n = heights.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (heights[left] > leftMax) {
                    leftMax = heights[left];
                } else {
                    totalWater += leftMax - heights[left];
                }
                left++;
            } else {
                if (heights[right] > rightMax) {
                    rightMax = heights[right];
                } else {
                    totalWater += rightMax - heights[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-e3": {
    python: `def dam_water_capacity(sections):
    n = len(sections)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if sections[left] > leftMax:
                leftMax = sections[left]
            else:
                totalWater += leftMax - sections[left]
            left += 1
        else:
            if sections[right] > rightMax:
                rightMax = sections[right]
            else:
                totalWater += rightMax - sections[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int damWaterCapacity(int[] sections) {
        int n = sections.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (sections[left] > leftMax) {
                    leftMax = sections[left];
                } else {
                    totalWater += leftMax - sections[left];
                }
                left++;
            } else {
                if (sections[right] > rightMax) {
                    rightMax = sections[right];
                } else {
                    totalWater += rightMax - sections[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int damWaterCapacity(int sections[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (sections[left] > leftMax) {
                leftMax = sections[left];
            } else {
                totalWater += leftMax - sections[left];
            }
            left++;
        } else {
            if (sections[right] > rightMax) {
                rightMax = sections[right];
            } else {
                totalWater += rightMax - sections[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int damWaterCapacity(vector<int>& sections) {
        int n = sections.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (sections[left] > leftMax) {
                    leftMax = sections[left];
                } else {
                    totalWater += leftMax - sections[left];
                }
                left++;
            } else {
                if (sections[right] > rightMax) {
                    rightMax = sections[right];
                } else {
                    totalWater += rightMax - sections[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-e4": {
    python: `def gutter_water_trapping(depths):
    n = len(depths)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if depths[left] > leftMax:
                leftMax = depths[left]
            else:
                totalWater += leftMax - depths[left]
            left += 1
        else:
            if depths[right] > rightMax:
                rightMax = depths[right]
            else:
                totalWater += rightMax - depths[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int gutterWaterTrapping(int[] depths) {
        int n = depths.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (depths[left] > leftMax) {
                    leftMax = depths[left];
                } else {
                    totalWater += leftMax - depths[left];
                }
                left++;
            } else {
                if (depths[right] > rightMax) {
                    rightMax = depths[right];
                } else {
                    totalWater += rightMax - depths[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int gutterWaterTrapping(int depths[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (depths[left] > leftMax) {
                leftMax = depths[left];
            } else {
                totalWater += leftMax - depths[left];
            }
            left++;
        } else {
            if (depths[right] > rightMax) {
                rightMax = depths[right];
            } else {
                totalWater += rightMax - depths[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int gutterWaterTrapping(vector<int>& depths) {
        int n = depths.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (depths[left] > leftMax) {
                    leftMax = depths[left];
                } else {
                    totalWater += leftMax - depths[left];
                }
                left++;
            } else {
                if (depths[right] > rightMax) {
                    rightMax = depths[right];
                } else {
                    totalWater += rightMax - depths[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-e5": {
    python: `def container_water_volume(walls):
    n = len(walls)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if walls[left] > leftMax:
                leftMax = walls[left]
            else:
                totalWater += leftMax - walls[left]
            left += 1
        else:
            if walls[right] > rightMax:
                rightMax = walls[right]
            else:
                totalWater += rightMax - walls[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int containerWaterVolume(int[] walls) {
        int n = walls.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (walls[left] > leftMax) {
                    leftMax = walls[left];
                } else {
                    totalWater += leftMax - walls[left];
                }
                left++;
            } else {
                if (walls[right] > rightMax) {
                    rightMax = walls[right];
                } else {
                    totalWater += rightMax - walls[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int containerWaterVolume(int walls[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (walls[left] > leftMax) {
                leftMax = walls[left];
            } else {
                totalWater += leftMax - walls[left];
            }
            left++;
        } else {
            if (walls[right] > rightMax) {
                rightMax = walls[right];
            } else {
                totalWater += rightMax - walls[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int containerWaterVolume(vector<int>& walls) {
        int n = walls.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (walls[left] > leftMax) {
                    leftMax = walls[left];
                } else {
                    totalWater += leftMax - walls[left];
                }
                left++;
            } else {
                if (walls[right] > rightMax) {
                    rightMax = walls[right];
                } else {
                    totalWater += rightMax - walls[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-m1": {
    python: `def rainwater_harvesting(elevations):
    n = len(elevations)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if elevations[left] > leftMax:
                leftMax = elevations[left]
            else:
                totalWater += leftMax - elevations[left]
            left += 1
        else:
            if elevations[right] > rightMax:
                rightMax = elevations[right]
            else:
                totalWater += rightMax - elevations[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int rainwaterHarvesting(int[] elevations) {
        int n = elevations.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevations[left] > leftMax) {
                    leftMax = elevations[left];
                } else {
                    totalWater += leftMax - elevations[left];
                }
                left++;
            } else {
                if (elevations[right] > rightMax) {
                    rightMax = elevations[right];
                } else {
                    totalWater += rightMax - elevations[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int rainwaterHarvesting(int elevations[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (elevations[left] > leftMax) {
                leftMax = elevations[left];
            } else {
                totalWater += leftMax - elevations[left];
            }
            left++;
        } else {
            if (elevations[right] > rightMax) {
                rightMax = elevations[right];
            } else {
                totalWater += rightMax - elevations[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int rainwaterHarvesting(vector<int>& elevations) {
        int n = elevations.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevations[left] > leftMax) {
                    leftMax = elevations[left];
                } else {
                    totalWater += leftMax - elevations[left];
                }
                left++;
            } else {
                if (elevations[right] > rightMax) {
                    rightMax = elevations[right];
                } else {
                    totalWater += rightMax - elevations[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-m2": {
    python: `def water_tank_segments(heights, queries):
    def trapFromIndex(start):
        left = start
        right = len(heights) - 1
        leftMax = 0
        rightMax = 0
        totalWater = 0

        while left <= right:
            if leftMax <= rightMax:
                if heights[left] > leftMax:
                    leftMax = heights[left]
                else:
                    totalWater += leftMax - heights[left]
                left += 1
            else:
                if heights[right] > rightMax:
                    rightMax = heights[right]
                else:
                    totalWater += rightMax - heights[right]
                right -= 1

        return totalWater

    return [trapFromIndex(q) for q in queries]`,

    java: `class Solution {
    private int trapFromIndex(int[] heights, int start) {
        int n = heights.length;
        int left = start;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (heights[left] > leftMax) {
                    leftMax = heights[left];
                } else {
                    totalWater += leftMax - heights[left];
                }
                left++;
            } else {
                if (heights[right] > rightMax) {
                    rightMax = heights[right];
                } else {
                    totalWater += rightMax - heights[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public int[] waterTankSegments(int[] heights, int[] queries) {
        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            result[i] = trapFromIndex(heights, queries[i]);
        }
        return result;
    }
}`,

    c: `int trapFromIndex(int heights[], int n, int start) {
    int left = start;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (heights[left] > leftMax) {
                leftMax = heights[left];
            } else {
                totalWater += leftMax - heights[left];
            }
            left++;
        } else {
            if (heights[right] > rightMax) {
                rightMax = heights[right];
            } else {
                totalWater += rightMax - heights[right];
            }
            right--;
        }
    }

    return totalWater;
}

void waterTankSegments(int heights[], int n, int queries[], int q, int result[]) {
    for (int i = 0; i < q; i++) {
        result[i] = trapFromIndex(heights, n, queries[i]);
    }
}`,

    cpp: `class Solution {
public:
    int trapFromIndex(vector<int>& heights, int start) {
        int n = heights.size();
        int left = start;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (heights[left] > leftMax) {
                    leftMax = heights[left];
                } else {
                    totalWater += leftMax - heights[left];
                }
                left++;
            } else {
                if (heights[right] > rightMax) {
                    rightMax = heights[right];
                } else {
                    totalWater += rightMax - heights[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    vector<int> waterTankSegments(vector<int>& heights, vector<int>& queries) {
        vector<int> result;
        for (int q : queries) {
            result.push_back(trapFromIndex(heights, q));
        }
        return result;
    }
};`
  },
  "trapping-rain-water-m3": {
    python: `def lake_water_volume(depths):
    n = len(depths)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if depths[left] > leftMax:
                leftMax = depths[left]
            else:
                totalWater += leftMax - depths[left]
            left += 1
        else:
            if depths[right] > rightMax:
                rightMax = depths[right]
            else:
                totalWater += rightMax - depths[right]
            right -= 1

    return totalWater`,

    java: `class Solution {
    public int lakeWaterVolume(int[] depths) {
        int n = depths.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (depths[left] > leftMax) {
                    leftMax = depths[left];
                } else {
                    totalWater += leftMax - depths[left];
                }
                left++;
            } else {
                if (depths[right] > rightMax) {
                    rightMax = depths[right];
                } else {
                    totalWater += rightMax - depths[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}`,

    c: `int lakeWaterVolume(int depths[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (depths[left] > leftMax) {
                leftMax = depths[left];
            } else {
                totalWater += leftMax - depths[left];
            }
            left++;
        } else {
            if (depths[right] > rightMax) {
                rightMax = depths[right];
            } else {
                totalWater += rightMax - depths[right];
            }
            right--;
        }
    }

    return totalWater;
}`,

    cpp: `class Solution {
public:
    int lakeWaterVolume(vector<int>& depths) {
        int n = depths.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (depths[left] > leftMax) {
                    leftMax = depths[left];
                } else {
                    totalWater += leftMax - depths[left];
                }
                left++;
            } else {
                if (depths[right] > rightMax) {
                    rightMax = depths[right];
                } else {
                    totalWater += rightMax - depths[right];
                }
                right--;
            }
        }

        return totalWater;
    }
};`
  },
  "trapping-rain-water-m4": {
    python: `def reservoir_water_storage(walls):
    n = len(walls)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0
    maxSegmentWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if walls[left] > leftMax:
                leftMax = walls[left]
            else:
                totalWater += leftMax - walls[left]
                if leftMax - walls[left] > maxSegmentWater:
                    maxSegmentWater = leftMax - walls[left]
            left += 1
        else:
            if walls[right] > rightMax:
                rightMax = walls[right]
            else:
                totalWater += rightMax - walls[right]
                if rightMax - walls[right] > maxSegmentWater:
                    maxSegmentWater = rightMax - walls[right]
            right -= 1

    return [totalWater, maxSegmentWater]`,

    java: `class Solution {
    public int[] reservoirWaterStorage(int[] walls) {
        int n = walls.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;
        int maxSegmentWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (walls[left] > leftMax) {
                    leftMax = walls[left];
                } else {
                    totalWater += leftMax - walls[left];
                    if (leftMax - walls[left] > maxSegmentWater) {
                        maxSegmentWater = leftMax - walls[left];
                    }
                }
                left++;
            } else {
                if (walls[right] > rightMax) {
                    rightMax = walls[right];
                } else {
                    totalWater += rightMax - walls[right];
                    if (rightMax - walls[right] > maxSegmentWater) {
                        maxSegmentWater = rightMax - walls[right];
                    }
                }
                right--;
            }
        }

        return new int[]{totalWater, maxSegmentWater};
    }
}`,

    c: `void reservoirWaterStorage(int walls[], int n, int result[]) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;
    int maxSegmentWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (walls[left] > leftMax) {
                leftMax = walls[left];
            } else {
                totalWater += leftMax - walls[left];
                if (leftMax - walls[left] > maxSegmentWater) {
                    maxSegmentWater = leftMax - walls[left];
                }
            }
            left++;
        } else {
            if (walls[right] > rightMax) {
                rightMax = walls[right];
            } else {
                totalWater += rightMax - walls[right];
                if (rightMax - walls[right] > maxSegmentWater) {
                    maxSegmentWater = rightMax - walls[right];
                }
            }
            right--;
        }
    }

    result[0] = totalWater;
    result[1] = maxSegmentWater;
}`,

    cpp: `class Solution {
public:
    vector<int> reservoirWaterStorage(vector<int>& walls) {
        int n = walls.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;
        int maxSegmentWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (walls[left] > leftMax) {
                    leftMax = walls[left];
                } else {
                    totalWater += leftMax - walls[left];
                    if (leftMax - walls[left] > maxSegmentWater) {
                        maxSegmentWater = leftMax - walls[left];
                    }
                }
                left++;
            } else {
                if (walls[right] > rightMax) {
                    rightMax = walls[right];
                } else {
                    totalWater += rightMax - walls[right];
                    if (rightMax - walls[right] > maxSegmentWater) {
                        maxSegmentWater = rightMax - walls[right];
                    }
                }
                right--;
            }
        }

        return {totalWater, maxSegmentWater};
    }
};`
  },
  "trapping-rain-water-m5": {
    python: `def water_collection_with_rate(elevations, rate):
    n = len(elevations)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if elevations[left] > leftMax:
                leftMax = elevations[left]
            else:
                totalWater += leftMax - elevations[left]
            left += 1
        else:
            if elevations[right] > rightMax:
                rightMax = elevations[right]
            else:
                totalWater += rightMax - elevations[right]
            right -= 1

    return totalWater * rate`,

    java: `class Solution {
    public int waterCollectionWithRate(int[] elevations, int rate) {
        int n = elevations.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevations[left] > leftMax) {
                    leftMax = elevations[left];
                } else {
                    totalWater += leftMax - elevations[left];
                }
                left++;
            } else {
                if (elevations[right] > rightMax) {
                    rightMax = elevations[right];
                } else {
                    totalWater += rightMax - elevations[right];
                }
                right--;
            }
        }

        return totalWater * rate;
    }
}`,

    c: `int waterCollectionWithRate(int elevations[], int n, int rate) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (elevations[left] > leftMax) {
                leftMax = elevations[left];
            } else {
                totalWater += leftMax - elevations[left];
            }
            left++;
        } else {
            if (elevations[right] > rightMax) {
                rightMax = elevations[right];
            } else {
                totalWater += rightMax - elevations[right];
            }
            right--;
        }
    }

    return totalWater * rate;
}`,

    cpp: `class Solution {
public:
    int waterCollectionWithRate(vector<int>& elevations, int rate) {
        int n = elevations.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (elevations[left] > leftMax) {
                    leftMax = elevations[left];
                } else {
                    totalWater += leftMax - elevations[left];
                }
                left++;
            } else {
                if (elevations[right] > rightMax) {
                    rightMax = elevations[right];
                } else {
                    totalWater += rightMax - elevations[right];
                }
                right--;
            }
        }

        return totalWater * rate;
    }
};`
  },
  "trapping-rain-water-h1": {
    python: `def circular_water_collection(elevations):
    def trap(arr):
        n = len(arr)
        left = 0
        right = n - 1
        leftMax = 0
        rightMax = 0
        totalWater = 0

        while left <= right:
            if leftMax <= rightMax:
                if arr[left] > leftMax:
                    leftMax = arr[left]
                else:
                    totalWater += leftMax - arr[left]
                left += 1
            else:
                if arr[right] > rightMax:
                    rightMax = arr[right]
                else:
                    totalWater += rightMax - arr[right]
                right -= 1

        return totalWater

    n = len(elevations)
    if n == 0:
        return 0

    maxWater = trap(elevations)
    for i in range(n):
        if elevations[i] < max(elevations):
            newElevations = elevations[i+1:] + elevations[:i+1]
            maxWater = max(maxWater, trap(newElevations))

    return maxWater`,

    java: `class Solution {
    private int trap(int[] arr) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public int circularWaterCollection(int[] elevations) {
        int n = elevations.length;
        if (n == 0) return 0;

        int maxWater = trap(elevations);
        int maxElevation = 0;
        for (int h : elevations) {
            maxElevation = Math.max(maxElevation, h);
        }

        for (int i = 0; i < n; i++) {
            if (elevations[i] < maxElevation) {
                int[] newElevations = new int[n];
                for (int j = 0; j < n; j++) {
                    newElevations[j] = elevations[(i + 1 + j) % n];
                }
                maxWater = Math.max(maxWater, trap(newElevations));
            }
        }

        return maxWater;
    }
}`,

    c: `int trap(int arr[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (arr[left] > leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] > rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
}

int circularWaterCollection(int elevations[], int n) {
    if (n == 0) return 0;

    int maxWater = trap(elevations, n);
    int maxElevation = 0;
    for (int i = 0; i < n; i++) {
        if (elevations[i] > maxElevation) {
            maxElevation = elevations[i];
        }
    }

    int temp[20000];
    for (int i = 0; i < n; i++) {
        if (elevations[i] < maxElevation) {
            for (int j = 0; j < n; j++) {
                temp[j] = elevations[(i + 1 + j) % n];
            }
            int water = trap(temp, n);
            if (water > maxWater) {
                maxWater = water;
            }
        }
    }

    return maxWater;
}`,

    cpp: `class Solution {
public:
    int trap(vector<int>& arr) {
        int n = arr.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    int circularWaterCollection(vector<int>& elevations) {
        int n = elevations.size();
        if (n == 0) return 0;

        int maxWater = trap(elevations);
        int maxElevation = *max_element(elevations.begin(), elevations.end());

        for (int i = 0; i < n; i++) {
            if (elevations[i] < maxElevation) {
                vector<int> newElevations;
                for (int j = i + 1; j < n; j++) {
                    newElevations.push_back(elevations[j]);
                }
                for (int j = 0; j <= i; j++) {
                    newElevations.push_back(elevations[j]);
                }
                maxWater = max(maxWater, trap(newElevations));
            }
        }

        return maxWater;
    }
};`
  },
  "trapping-rain-water-h2": {
    python: `def multiple_terrain_comparison(terrains):
    def trap(arr):
        n = len(arr)
        left = 0
        right = n - 1
        leftMax = 0
        rightMax = 0
        totalWater = 0

        while left <= right:
            if leftMax <= rightMax:
                if arr[left] > leftMax:
                    leftMax = arr[left]
                else:
                    totalWater += leftMax - arr[left]
                left += 1
            else:
                if arr[right] > rightMax:
                    rightMax = arr[right]
                else:
                    totalWater += rightMax - arr[right]
                right -= 1

        return totalWater

    maxWater = 0
    maxIndex = 0
    for i, terrain in enumerate(terrains):
        water = trap(terrain)
        if water > maxWater:
            maxWater = water
            maxIndex = i

    return [maxIndex, maxWater]`,

    java: `class Solution {
    private int trap(int[] arr) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public int[] multipleTerrainComparison(int[][] terrains) {
        int maxWater = 0;
        int maxIndex = 0;

        for (int i = 0; i < terrains.length; i++) {
            int water = trap(terrains[i]);
            if (water > maxWater) {
                maxWater = water;
                maxIndex = i;
            }
        }

        return new int[]{maxIndex, maxWater};
    }
}`,

    c: `int trap(int arr[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (arr[left] > leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] > rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
}

void multipleTerrainComparison(int terrains[][1000], int t, int n, int result[]) {
    int maxWater = 0;
    int maxIndex = 0;

    for (int i = 0; i < t; i++) {
        int water = trap(terrains[i], n);
        if (water > maxWater) {
            maxWater = water;
            maxIndex = i;
        }
    }

    result[0] = maxIndex;
    result[1] = maxWater;
}`,

    cpp: `class Solution {
public:
    int trap(vector<int>& arr) {
        int n = arr.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    vector<int> multipleTerrainComparison(vector<vector<int>>& terrains) {
        int maxWater = 0;
        int maxIndex = 0;

        for (int i = 0; i < terrains.size(); i++) {
            int water = trap(terrains[i]);
            if (water > maxWater) {
                maxWater = water;
                maxIndex = i;
            }
        }

        return {maxIndex, maxWater};
    }
};`
  },
  "trapping-rain-water-h3": {
    python: `def dynamic_elevation_updates(elevations, updates):
    def trap(arr):
        n = len(arr)
        left = 0
        right = n - 1
        leftMax = 0
        rightMax = 0
        totalWater = 0

        while left <= right:
            if leftMax <= rightMax:
                if arr[left] > leftMax:
                    leftMax = arr[left]
                else:
                    totalWater += leftMax - arr[left]
                left += 1
            else:
                if arr[right] > rightMax:
                    rightMax = arr[right]
                else:
                    totalWater += rightMax - arr[right]
                right -= 1

        return totalWater

    results = []
    for idx, newHeight in updates:
        elevations[idx] = newHeight
        results.append(trap(elevations))

    return results`,

    java: `class Solution {
    private int trap(int[] arr) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public int[] dynamicElevationUpdates(int[] elevations, int[][] updates) {
        int[] result = new int[updates.length];

        for (int i = 0; i < updates.length; i++) {
            elevations[updates[i][0]] = updates[i][1];
            result[i] = trap(elevations);
        }

        return result;
    }
}`,

    c: `int trap(int arr[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (arr[left] > leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] > rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
}

void dynamicElevationUpdates(int elevations[], int n, int updates[][2], int u, int result[]) {
    for (int i = 0; i < u; i++) {
        elevations[updates[i][0]] = updates[i][1];
        result[i] = trap(elevations, n);
    }
}`,

    cpp: `class Solution {
public:
    int trap(vector<int>& arr) {
        int n = arr.size();
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    vector<int> dynamicElevationUpdates(vector<int>& elevations, vector<vector<int>>& updates) {
        vector<int> result;

        for (auto& update : updates) {
            elevations[update[0]] = update[1];
            result.push_back(trap(elevations));
        }

        return result;
    }
};`
  },
  "trapping-rain-water-h4": {
    python: `def water_collection_with_min_width(elevations, k):
    n = len(elevations)
    maxWater = 0

    for i in range(n):
        leftMax = 0
        rightMax = 0
        for j in range(i, n):
            if j - i + 1 >= k:
                if elevations[j] > rightMax:
                    rightMax = elevations[j]
                if j - i + 1 >= k:
                    water = min(leftMax, rightMax) - elevations[j] if min(leftMax, rightMax) > elevations[j] else 0
                for l in range(i, j + 1):
                    if elevations[l] > leftMax:
                        leftMax = elevations[l]
                if j - i + 1 >= k:
                    water = min(leftMax, rightMax) - elevations[j] if min(leftMax, rightMax) > elevations[j] else 0
                    for m in range(i, j + 1):
                        if elevations[m] < min(leftMax, rightMax):
                            water = min(leftMax, rightMax) - elevations[m]
                            if water > maxWater:
                                maxWater = water

    return maxWater`,

    java: `class Solution {
    public int waterCollectionWithMinWidth(int[] elevations, int k) {
        int n = elevations.length;
        int maxWater = 0;

        for (int i = 0; i < n; i++) {
            int leftMax = 0;
            int rightMax = 0;
            for (int j = i; j < n; j++) {
                if (elevations[j] > leftMax) {
                    leftMax = elevations[j];
                }
                if (j - i + 1 >= k) {
                    for (int l = i; l <= j; l++) {
                        if (elevations[l] > rightMax) {
                            rightMax = elevations[l];
                        }
                    }
                    int water = Math.min(leftMax, rightMax) - elevations[j];
                    if (water > maxWater) {
                        maxWater = water;
                    }
                }
            }
        }

        return maxWater;
    }
}`,

    c: `int waterCollectionWithMinWidth(int elevations[], int n, int k) {
    int maxWater = 0;

    for (int i = 0; i < n; i++) {
        int leftMax = 0;
        int rightMax = 0;
        for (int j = i; j < n; j++) {
            if (elevations[j] > leftMax) {
                leftMax = elevations[j];
            }
            if (j - i + 1 >= k) {
                for (int l = i; l <= j; l++) {
                    if (elevations[l] > rightMax) {
                        rightMax = elevations[l];
                    }
                }
                int water = (leftMax < rightMax ? leftMax : rightMax) - elevations[j];
                if (water > maxWater) {
                    maxWater = water;
                }
            }
        }
    }

    return maxWater;
}`,

    cpp: `class Solution {
public:
    int waterCollectionWithMinWidth(vector<int>& elevations, int k) {
        int n = elevations.size();
        int maxWater = 0;

        for (int i = 0; i < n; i++) {
            int leftMax = 0;
            int rightMax = 0;
            for (int j = i; j < n; j++) {
                if (elevations[j] > leftMax) {
                    leftMax = elevations[j];
                }
                if (j - i + 1 >= k) {
                    for (int l = i; l <= j; l++) {
                        if (elevations[l] > rightMax) {
                            rightMax = elevations[l];
                        }
                    }
                    int water = min(leftMax, rightMax) - elevations[j];
                    if (water > maxWater) {
                        maxWater = water;
                    }
                }
            }
        }

        return maxWater;
    }
};`
  },
  "trapping-rain-water-h5": {
    python: `def terrain_segmentation(elevations, k):
    def trap(arr, start, end):
        left = start
        right = end
        leftMax = 0
        rightMax = 0
        totalWater = 0

        while left <= right:
            if leftMax <= rightMax:
                if arr[left] > leftMax:
                    leftMax = arr[left]
                else:
                    totalWater += leftMax - arr[left]
                left += 1
            else:
                if arr[right] > rightMax:
                    rightMax = arr[right]
                else:
                    totalWater += rightMax - arr[right]
                right -= 1

        return totalWater

    n = len(elevations)
    if k == 1:
        return trap(elevations, 0, n - 1)

    dp = [[0] * (k + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        dp[i][1] = trap(elevations, 0, i - 1)

    for j in range(2, k + 1):
        for i in range(j, n + 1):
            dp[i][j] = float('inf')
            for m in range(j - 1, i):
                dp[i][j] = min(dp[i][j], max(dp[m][j - 1], trap(elevations, m, i - 1)))

    return dp[n][k]`,

    java: `class Solution {
    private int trap(int[] arr, int start, int end) {
        int left = start;
        int right = end;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public int terrainSegmentation(int[] elevations, int k) {
        int n = elevations.length;
        if (k == 1) {
            return trap(elevations, 0, n - 1);
        }

        int[][] dp = new int[n + 1][k + 1];

        for (int i = 1; i <= n; i++) {
            dp[i][1] = trap(elevations, 0, i - 1);
        }

        for (int j = 2; j <= k; j++) {
            for (int i = j; i <= n; i++) {
                dp[i][j] = Integer.MAX_VALUE;
                for (int m = j - 1; m < i; m++) {
                    dp[i][j] = Math.min(dp[i][j], Math.max(dp[m][j - 1], trap(elevations, m, i - 1)));
                }
            }
        }

        return dp[n][k];
    }
}`,

    c: `int trap(int arr[], int n, int start, int end) {
    int left = start;
    int right = end;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (arr[left] > leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] > rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
}

int terrainSegmentation(int elevations[], int n, int k) {
    if (k == 1) {
        return trap(elevations, n, 0, n - 1);
    }

    int dp[1001][1001];

    for (int i = 1; i <= n; i++) {
        dp[i][1] = trap(elevations, n, 0, i - 1);
    }

    for (int j = 2; j <= k; j++) {
        for (int i = j; i <= n; i++) {
            dp[i][j] = 2147483647;
            for (int m = j - 1; m < i; m++) {
                int val = dp[m][j - 1] > trap(elevations, n, m, i - 1) ? dp[m][j - 1] : trap(elevations, n, m, i - 1);
                if (val < dp[i][j]) {
                    dp[i][j] = val;
                }
            }
        }
    }

    return dp[n][k];
}`,

    cpp: `class Solution {
public:
    int trap(vector<int>& arr, int start, int end) {
        int left = start;
        int right = end;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (arr[left] > leftMax) {
                    leftMax = arr[left];
                } else {
                    totalWater += leftMax - arr[left];
                }
                left++;
            } else {
                if (arr[right] > rightMax) {
                    rightMax = arr[right];
                } else {
                    totalWater += rightMax - arr[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    int terrainSegmentation(vector<int>& elevations, int k) {
        int n = elevations.size();
        if (k == 1) {
            return trap(elevations, 0, n - 1);
        }

        vector<vector<int>> dp(n + 1, vector<int>(k + 1, 0));

        for (int i = 1; i <= n; i++) {
            dp[i][1] = trap(elevations, 0, i - 1);
        }

        for (int j = 2; j <= k; j++) {
            for (int i = j; i <= n; i++) {
                dp[i][j] = INT_MAX;
                for (int m = j - 1; m < i; m++) {
                    dp[i][j] = min(dp[i][j], max(dp[m][j - 1], trap(elevations, m, i - 1)));
                }
            }
        }

        return dp[n][k];
    }
};`
  }
};