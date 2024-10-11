const LearnerSubmissions = [                // LearnerSubmissions -> array > objects > object
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
]

function restructureByNestedKey (arrOfObjs) {
    restructuredArr = []
    uniqueValuesOfKey = []

    for (const objEntry of arrOfObjs) {

        newObj = {
            learner_id: 0,
            subm_details: {
                subm_ats: [],
                scores: []
            }
        }

        const isKeyUnique = uniqueValuesOfKey.indexOf(objEntry.learner_id)

        if (isKeyUnique === -1) {

            uniqueValuesOfKey.push(objEntry.learner_id)

            newObj.learner_id = objEntry.learner_id
            newObj.subm_details.subm_ats.push(objEntry.submission.submitted_at)
            newObj.subm_details.scores.push(objEntry.submission.score)

            restructuredArr.push(newObj)
        } else {

            restructuredArr[isKeyUnique].subm_details.subm_ats.push(objEntry.submission.submitted_at)
            restructuredArr[isKeyUnique].subm_details.scores.push(objEntry.submission.score)
        }
    }
    return restructuredArr
}

const tryFunction = restructureByNestedKey(LearnerSubmissions)

// console.log(restructureByNestedKey(LearnerSubmissions))          // <-- my VSCode hid the contents of subm_ats & scores arrays,
// OR                                                               // showing in terminal as '[Array]', so I googled until I found JSON.stringify(x,y,z)
// console.log(JSON.stringify(tryFunction, null, 6))                // (but I don't otherwise have a firm grasp of JSON methods yet)