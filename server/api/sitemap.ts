
export default defineEventHandler(async (event) => {
  console.log("reguest made", event._requestBody())
  return {
    id: 123
  }
})
