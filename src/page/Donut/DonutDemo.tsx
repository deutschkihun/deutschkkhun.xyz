import {Title, Box, Paragraph, Subtitle} from '../../components'

export const DonutDemo = () => {
  return (
    <>
      <Box>
        <Subtitle>Why I don't recommend donut charts for data visualization</Subtitle>
        <Paragraph>
          A pie chart is a circle divided into sectors that each represent a proportion of
          the whole. It is often used to show percentage, where the sum of the sectors
          equals 100%. The problem is that humans are pretty bad at reading angles. In the
          adjacent pie chart, try to figure out which group is the biggest one and try to
          order them by value. You will probably struggle to do so and this is why pie
          charts must be avoided. If you’re still not convinced, let’s try to compare
          several pie plots. Once more, try to understand which group has the highest
          value in these 3 graphics. Also, try to figure out what is the evolution of the
          value among groups.
        </Paragraph>
        <Paragraph>
          Now, let’s represent exactly the same data using a barplot: As you can see on
          this barplot, there is a heavy difference between the three pie plots with a
          hidden pattern that you definitely don’t want to miss when you tell your story.
        </Paragraph>
        <Paragraph>
          3d legend aside percentages that do not sum to 100 too many items exploded pie
          charts
        </Paragraph>
      </Box>
      <Box>
        <Subtitle>Alternatives</Subtitle>
        <Paragraph>
          The barplot is the best alternative to pie plots. If you have many values to
          display, you can also consider a lollipop plot that is a bit more elegant in my
          opinion. Here is an example based on the amount of weapons sold by a few
          countries in the world:
        </Paragraph>
        <Paragraph>
          Another possibility would be to create a treemap if your goal is to describe
          what the whole is composed of.
        </Paragraph>
      </Box>
    </>
  )
}

// https://www.data-to-viz.com/caveat/pie.html
