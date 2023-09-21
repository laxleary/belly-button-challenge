# Belly Button Challenge
## Module 14 Challenge

### Overview
In this repository, we construct the code to create a [Belly Button Data Dashboard](https://laxleary.github.io/belly-button-challenge/) based on lab results studying the microbiomes in test subjects' belly buttons. Using [JavaScript](static/js/app.js), the code includes a call to the API from Robb Dunn Lab, which imports JSON data for approximately 1600 test subjects including metadata and test sample data. Then, Plotly with JS is used to construct a bar chart, a scatterplot, a gauge, and a demographics list for the selected test subject. The bar chart shows sample values per species ID for the 10 most populous species in a subject's sample (if a full 10 species were present), while the scatterplot compares the same two variables but includes all data points. The gauge outlines the belly button washing frequency reported by the test subject selected. All elements of the page which feature information about a test subject update when a new selection is made on the drop-down menu. 

### Outside Resources
The following code was developed solely by me, with no assistance from TAs, peers, instructors, or tutors. The Plotly documentation was explored at length to employ chart types not yet seen in class, but otherwise no outside sources were used. The gauge code was copied directly out of Plotly documentation and then modified, while all other JS code was written from scratch. The HTML starter code was given for the challenge, but was modified as needed. 

### Possible Improvements
- The Plotly gauge does not automatically include a needle, so for now the gauge instead has a bar that fills to indicate levels on the gauge. Overlaying a shape feature could add needle capability.
- The instructions for the assignment said to directly base marker size in the scatterplot on sample_values, but for some test subject these values are so large for one sample that they render the rest of the graph unreadable. It may instead be ideal to use a value such as log(sample_values) to avoid such issues with large sample_values.
- A study relating wash frequency with number of species found in samples (length of sample_values), or even just sample_values might also yield interesting results. 

### References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [Rob Dunn Lab](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links) to an external site.
