import { ApiServicePageServicePage } from "./types/contentTypes"

async function main() {
  const res = await fetch('http://localhost:1337/api/services-page?pLevel=8', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer bd49c2da5cd2f424c108e1d925e3f8c23c36bb5084b1ad4eb48fd90d4800e6dc54d80e0fa5634cf702d0c8969601dca64cacb4980ede7100c10349bbef1d06048d70bbb6668ef587300e562af757eb26f876f0b01dea3ed5f12793bd20de6e9e69d375e7cd4e75f20246e121c158da421525738b97c89e0d155567e9b5e32f52',
    },
  })

  const data: ApiServicePageServicePage = (await res.json()) as ApiServicePageServicePage
  console.log(data)

  console.log('data?.attributes?.sections:', data?.attributes?.sections)
}

await main()
