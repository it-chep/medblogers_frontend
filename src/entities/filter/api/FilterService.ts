import { IFilter } from "../model/types"


const FILTERS = {
    "filter_info": [
        {
            "name": "\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c",
            "slug": "tg"
        },
        {
            "name": "\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c",
            "slug": "inst"
        }
    ],
    "cities": [
        {
            "id": 107,
            "name": "\u0410\u0431\u0430\u043a\u0430\u043d",
            "doctors_count": 1
        },
        {
            "id": 1,
            "name": "\u0410\u043b\u044c\u043c\u0435\u0442\u044c\u0435\u0432\u0441\u043a",
            "doctors_count": 3
        },
        {
            "id": 2,
            "name": "\u0410\u043d\u0430\u043f\u0430",
            "doctors_count": 1
        },
        {
            "id": 3,
            "name": "\u0410\u0441\u0442\u0430\u043d\u0430",
            "doctors_count": 1
        },
        {
            "id": 4,
            "name": "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c",
            "doctors_count": 1
        },
        {
            "id": 5,
            "name": "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430",
            "doctors_count": 2
        },
        {
            "id": 6,
            "name": "\u0411\u0430\u0440\u043d\u0430\u0443\u043b ",
            "doctors_count": 1
        },
        {
            "id": 104,
            "name": "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434",
            "doctors_count": 1
        },
        {
            "id": 98,
            "name": "\u0412\u0430\u043b\u0435\u043d\u0441\u0438\u044f (\u0418\u0441\u043f\u0430\u043d\u0438\u044f)",
            "doctors_count": 1
        },
        {
            "id": 10,
            "name": "\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",
            "doctors_count": 4
        },
        {
            "id": 12,
            "name": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
            "doctors_count": 4
        },
        {
            "id": 13,
            "name": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434 ",
            "doctors_count": 2
        },
        {
            "id": 14,
            "name": "\u0412\u043e\u0440\u043e\u043d\u0435\u0436",
            "doctors_count": 4
        },
        {
            "id": 15,
            "name": "\u0413\u043e\u0440\u043d\u043e-\u0410\u043b\u0442\u0430\u0439\u0441\u043a ",
            "doctors_count": 1
        },
        {
            "id": 109,
            "name": "\u0413\u0443\u0441\u044c-\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439",
            "doctors_count": 1
        },
        {
            "id": 108,
            "name": "\u0414\u0438\u043c\u0438\u0442\u0440\u043e\u0432\u0433\u0440\u0430\u0434",
            "doctors_count": 1
        },
        {
            "id": 16,
            "name": "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
            "doctors_count": 1
        },
        {
            "id": 100,
            "name": "\u0415\u0432\u043f\u0430\u0442\u043e\u0440\u0438\u044f",
            "doctors_count": 1
        },
        {
            "id": 17,
            "name": "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
            "doctors_count": 31
        },
        {
            "id": 99,
            "name": "\u0415\u043b\u0435\u0446",
            "doctors_count": 1
        },
        {
            "id": 18,
            "name": "\u0415\u0440\u0435\u0432\u0430\u043d",
            "doctors_count": 1
        },
        {
            "id": 116,
            "name": "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 20,
            "name": "\u0418\u0432\u0430\u043d\u043e\u0432\u043e ",
            "doctors_count": 2
        },
        {
            "id": 21,
            "name": "\u0418\u0436\u0435\u0432\u0441\u043a",
            "doctors_count": 2
        },
        {
            "id": 102,
            "name": "\u0418\u0440\u0431\u0438\u0442",
            "doctors_count": 1
        },
        {
            "id": 22,
            "name": "\u0418\u0440\u043a\u0443\u0442\u0441\u043a",
            "doctors_count": 3
        },
        {
            "id": 23,
            "name": "\u041a\u0430\u0437\u0430\u043d\u044c",
            "doctors_count": 11
        },
        {
            "id": 95,
            "name": "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
            "doctors_count": 1
        },
        {
            "id": 24,
            "name": "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434 ",
            "doctors_count": 5
        },
        {
            "id": 110,
            "name": "\u041a\u0430\u043b\u0443\u0433\u0430",
            "doctors_count": 1
        },
        {
            "id": 25,
            "name": "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a ",
            "doctors_count": 1
        },
        {
            "id": 26,
            "name": "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
            "doctors_count": 6
        },
        {
            "id": 27,
            "name": "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 28,
            "name": "\u041b\u0435\u0439\u043f\u0446\u0438\u0433 (\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f)",
            "doctors_count": 1
        },
        {
            "id": 88,
            "name": "\u041b\u0438\u043f\u0435\u0446\u043a",
            "doctors_count": 2
        },
        {
            "id": 30,
            "name": "\u041c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430",
            "doctors_count": 3
        },
        {
            "id": 31,
            "name": "\u041c\u0438\u043d\u0441\u043a, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",
            "doctors_count": 1
        },
        {
            "id": 33,
            "name": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "doctors_count": 110
        },
        {
            "id": 34,
            "name": "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a ",
            "doctors_count": 1
        },
        {
            "id": 103,
            "name": "\u041d\u0430\u043b\u044c\u0447\u0438\u043a",
            "doctors_count": 1
        },
        {
            "id": 37,
            "name": "\u041d\u0438\u0436\u043d\u0435\u0432\u0430\u0440\u0442\u043e\u0432\u0441\u043a",
            "doctors_count": 2
        },
        {
            "id": 38,
            "name": "\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",
            "doctors_count": 4
        },
        {
            "id": 39,
            "name": "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a ",
            "doctors_count": 3
        },
        {
            "id": 117,
            "name": "\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 113,
            "name": "\u041d\u044f\u043d\u0434\u043e\u043c\u0430",
            "doctors_count": 1
        },
        {
            "id": 105,
            "name": "\u041e\u043c\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 43,
            "name": "\u041f\u0435\u043d\u0437\u0430",
            "doctors_count": 3
        },
        {
            "id": 45,
            "name": "\u041f\u0435\u0440\u043c\u044c",
            "doctors_count": 5
        },
        {
            "id": 46,
            "name": "\u041f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 93,
            "name": "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a - \u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439",
            "doctors_count": 1
        },
        {
            "id": 49,
            "name": "\u041f\u0443\u0448\u043a\u0438\u043d\u043e ",
            "doctors_count": 1
        },
        {
            "id": 50,
            "name": "\u041f\u044f\u0442\u0438\u0433\u043e\u0440\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 52,
            "name": "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
            "doctors_count": 13
        },
        {
            "id": 53,
            "name": "\u0420\u044f\u0437\u0430\u043d\u044c",
            "doctors_count": 2
        },
        {
            "id": 54,
            "name": "\u0421\u0430\u0430\u0440\u0431\u0440\u044e\u043a\u0435\u043d (\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f)",
            "doctors_count": 2
        },
        {
            "id": 91,
            "name": "\u0421\u0430\u043a\u0440\u0430\u043c\u0435\u043d\u0442\u043e (\u0421\u0428\u0410)",
            "doctors_count": 1
        },
        {
            "id": 55,
            "name": "\u0421\u0430\u043c\u0430\u0440\u0430",
            "doctors_count": 7
        },
        {
            "id": 56,
            "name": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "doctors_count": 53
        },
        {
            "id": 57,
            "name": "\u0421\u0430\u0440\u0430\u043d\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 58,
            "name": "\u0421\u0430\u0440\u0430\u0442\u043e\u0432",
            "doctors_count": 3
        },
        {
            "id": 89,
            "name": "\u0421\u0435\u0432\u0435\u0440\u043e\u0434\u0432\u0438\u043d\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 60,
            "name": "\u0421\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c",
            "doctors_count": 1
        },
        {
            "id": 87,
            "name": "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 61,
            "name": "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c",
            "doctors_count": 2
        },
        {
            "id": 63,
            "name": "\u0421\u0443\u0440\u0433\u0443\u0442",
            "doctors_count": 2
        },
        {
            "id": 64,
            "name": "\u0421\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440",
            "doctors_count": 1
        },
        {
            "id": 65,
            "name": "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433 ",
            "doctors_count": 2
        },
        {
            "id": 67,
            "name": "\u0422\u0431\u0438\u043b\u0438\u0441\u0438 ",
            "doctors_count": 2
        },
        {
            "id": 115,
            "name": "\u0422\u0432\u0435\u0440\u044c",
            "doctors_count": 1
        },
        {
            "id": 106,
            "name": "\u0422\u0438\u0445\u043e\u0440\u0435\u0446\u043a",
            "doctors_count": 1
        },
        {
            "id": 68,
            "name": "\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438 ",
            "doctors_count": 1
        },
        {
            "id": 69,
            "name": "\u0422\u043e\u043c\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 71,
            "name": "\u0422\u0443\u043b\u0430",
            "doctors_count": 2
        },
        {
            "id": 72,
            "name": "\u0422\u044e\u043c\u0435\u043d\u044c",
            "doctors_count": 7
        },
        {
            "id": 73,
            "name": "\u0423\u0444\u0430",
            "doctors_count": 12
        },
        {
            "id": 74,
            "name": "\u0423\u0445\u0442\u0430",
            "doctors_count": 1
        },
        {
            "id": 75,
            "name": "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a ",
            "doctors_count": 3
        },
        {
            "id": 76,
            "name": "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a",
            "doctors_count": 2
        },
        {
            "id": 114,
            "name": "\u0425\u0430\u0441\u0430\u0432\u044e\u0440\u0442",
            "doctors_count": 1
        },
        {
            "id": 77,
            "name": "\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b",
            "doctors_count": 1
        },
        {
            "id": 90,
            "name": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 79,
            "name": "\u0428\u0430\u0445\u0442\u044b",
            "doctors_count": 1
        },
        {
            "id": 80,
            "name": "\u0429\u0435\u043b\u043a\u043e\u0432\u043e",
            "doctors_count": 1
        },
        {
            "id": 82,
            "name": "\u042e\u0436\u043d\u043e-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a",
            "doctors_count": 2
        },
        {
            "id": 118,
            "name": "\u042f\u043a\u0443\u0442\u0441\u043a",
            "doctors_count": 1
        },
        {
            "id": 83,
            "name": "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
            "doctors_count": 3
        }
    ],
    "specialities": [
        {
            "id": 1,
            "name": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctors_count": 51
        },
        {
            "id": 3,
            "name": "\u0410\u043b\u043b\u0435\u0440\u0433\u043e\u043b\u043e\u0433-\u0438\u043c\u043c\u0443\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 6
        },
        {
            "id": 131,
            "name": "\u0410\u043d\u0434\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 5,
            "name": "\u0410\u043d\u0435\u0441\u0442\u0435\u0437\u0438\u043e\u043b\u043e\u0433-\u0440\u0435\u0430\u043d\u0438\u043c\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 119,
            "name": "\u0411\u0440\u0435\u043d\u0434\u043c\u0435\u0439\u043a\u0435\u0440 \u0432\u0440\u0430\u0447\u0435\u0439",
            "doctors_count": 1
        },
        {
            "id": 106,
            "name": "\u0412\u0435\u0442\u0432\u0440\u0430\u0447",
            "doctors_count": 3
        },
        {
            "id": 104,
            "name": "\u0412\u0440\u0430\u0447 \u041a\u041b\u0414",
            "doctors_count": 2
        },
        {
            "id": 6,
            "name": "\u0412\u0440\u0430\u0447 \u041b\u0424\u041a ",
            "doctors_count": 3
        },
        {
            "id": 7,
            "name": "\u0412\u0440\u0430\u0447 \u0421\u041c\u041f",
            "doctors_count": 2
        },
        {
            "id": 9,
            "name": "\u0413\u0430\u0441\u0442\u0440\u043e\u044d\u043d\u0442\u0435\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 9
        },
        {
            "id": 135,
            "name": "\u0413\u0435\u043c\u043e\u0441\u0442\u0430\u0437\u0438\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 127,
            "name": "\u0413\u0435\u043f\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 129,
            "name": "\u0413\u0435\u0440\u0438\u0430\u0442\u0440",
            "doctors_count": 1
        },
        {
            "id": 12,
            "name": "\u0413\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433-\u044d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 11
        },
        {
            "id": 13,
            "name": "\u0414\u0435\u0440\u043c\u0430\u0442\u043e\u0432\u0435\u043d\u0435\u0440\u043e\u043b\u043e\u0433 ",
            "doctors_count": 14
        },
        {
            "id": 125,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctors_count": 4
        },
        {
            "id": 18,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 137,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043d\u0443\u0442\u0440\u0438\u0446\u0438\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 124,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440",
            "doctors_count": 2
        },
        {
            "id": 105,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 3
        },
        {
            "id": 16,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0443\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 3
        },
        {
            "id": 136,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctors_count": 1
        },
        {
            "id": 113,
            "name": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u044d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 20,
            "name": "\u0414\u0438\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 11
        },
        {
            "id": 21,
            "name": "\u0418\u043d\u0444\u0435\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u043e\u043b\u0435\u0437\u043d\u0438 ",
            "doctors_count": 6
        },
        {
            "id": 22,
            "name": "\u041a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433",
            "doctors_count": 14
        },
        {
            "id": 118,
            "name": "\u041a.\u041c.\u041d.",
            "doctors_count": 6
        },
        {
            "id": 133,
            "name": "\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442 \u043f\u043e \u0413\u0412",
            "doctors_count": 2
        },
        {
            "id": 24,
            "name": "\u041a\u043e\u0441\u043c\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 10
        },
        {
            "id": 26,
            "name": "\u041b\u043e\u0433\u043e\u043f\u0435\u0434-\u0434\u0435\u0444\u0435\u043a\u0442\u043e\u043b\u043e\u0433 ",
            "doctors_count": 1
        },
        {
            "id": 110,
            "name": "\u041c\u0430\u043c\u043c\u043e\u043b\u043e\u0433",
            "doctors_count": 3
        },
        {
            "id": 108,
            "name": "\u041c\u0430\u0440\u043a\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 28,
            "name": "\u041c\u0430\u0441\u0441\u0430\u0436, \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f ",
            "doctors_count": 3
        },
        {
            "id": 115,
            "name": "\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0439 \u044e\u0440\u0438\u0441\u0442",
            "doctors_count": 1
        },
        {
            "id": 29,
            "name": "\u041c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442 ",
            "doctors_count": 4
        },
        {
            "id": 123,
            "name": "\u041d\u0430\u0440\u043a\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 30,
            "name": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 38
        },
        {
            "id": 34,
            "name": "\u041d\u0435\u043e\u043d\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 3
        },
        {
            "id": 102,
            "name": "\u041d\u0435\u0444\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 5
        },
        {
            "id": 122,
            "name": "\u041d\u0443\u0442\u0440\u0438\u0446\u0438\u043e\u043b\u043e\u0433",
            "doctors_count": 4
        },
        {
            "id": 38,
            "name": "\u041e\u043d\u043a\u043e\u043b\u043e\u0433",
            "doctors_count": 9
        },
        {
            "id": 44,
            "name": "\u041e\u0440\u0442\u043e\u043f\u0435\u0434",
            "doctors_count": 1
        },
        {
            "id": 45,
            "name": "\u041e\u0441\u0442\u0435\u043e\u043f\u0430\u0442",
            "doctors_count": 2
        },
        {
            "id": 46,
            "name": "\u041e\u0442\u043e\u0440\u0438\u043d\u043e\u043b\u0430\u0440\u0438\u043d\u0433\u043e\u043b\u043e\u0433",
            "doctors_count": 19
        },
        {
            "id": 48,
            "name": "\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433",
            "doctors_count": 15
        },
        {
            "id": 50,
            "name": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctors_count": 34
        },
        {
            "id": 51,
            "name": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctors_count": 10
        },
        {
            "id": 117,
            "name": "\u041f\u043e\u0434\u0438\u0430\u0442\u0440",
            "doctors_count": 1
        },
        {
            "id": 103,
            "name": "\u041f\u043e\u0434\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 109,
            "name": "\u041f\u0440\u043e\u0434\u044e\u0441\u0435\u0440",
            "doctors_count": 1
        },
        {
            "id": 53,
            "name": "\u041f\u0440\u043e\u043a\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 5
        },
        {
            "id": 134,
            "name": "\u041f\u0440\u043e\u0444\u043f\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 54,
            "name": "\u041f\u0441\u0438\u0445\u0438\u0430\u0442\u0440",
            "doctors_count": 9
        },
        {
            "id": 56,
            "name": "\u041f\u0441\u0438\u0445\u043e\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctors_count": 8
        },
        {
            "id": 57,
            "name": "\u041f\u0443\u043b\u044c\u043c\u043e\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 4
        },
        {
            "id": 132,
            "name": "\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 101,
            "name": "\u0420\u0435\u0432\u043c\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 58,
            "name": "\u0420\u0435\u043d\u0442\u0433\u0435\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 6
        },
        {
            "id": 2,
            "name": "\u0420\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 9
        },
        {
            "id": 59,
            "name": "\u0421\u0435\u043a\u0441\u043e\u043b\u043e\u0433",
            "doctors_count": 6
        },
        {
            "id": 60,
            "name": "\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430",
            "doctors_count": 6
        },
        {
            "id": 62,
            "name": "\u0421\u041c\u041c-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442",
            "doctors_count": 2
        },
        {
            "id": 116,
            "name": "\u0421\u043e\u043c\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 63,
            "name": "\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u0440\u0430\u0447",
            "doctors_count": 3
        },
        {
            "id": 65,
            "name": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433 \u043e\u0431\u0449\u0435\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",
            "doctors_count": 7
        },
        {
            "id": 67,
            "name": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433-\u043e\u0440\u0442\u043e\u0434\u043e\u043d\u0442 ",
            "doctors_count": 5
        },
        {
            "id": 68,
            "name": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433-\u043e\u0440\u0442\u043e\u043f\u0435\u0434",
            "doctors_count": 2
        },
        {
            "id": 112,
            "name": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433-\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctors_count": 3
        },
        {
            "id": 71,
            "name": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433-\u0445\u0438\u0440\u0443\u0440\u0433",
            "doctors_count": 4
        },
        {
            "id": 75,
            "name": "\u0421\u0442\u0443\u0434\u0435\u043d\u0442",
            "doctors_count": 1
        },
        {
            "id": 78,
            "name": "\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctors_count": 26
        },
        {
            "id": 79,
            "name": "\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442 \u043e\u0440\u0442\u043e\u043f\u0435\u0434",
            "doctors_count": 1
        },
        {
            "id": 80,
            "name": "\u0422\u0440\u0430\u0432\u043c\u0430\u0442\u043e\u043b\u043e\u0433-\u043e\u0440\u0442\u043e\u043f\u0435\u0434",
            "doctors_count": 7
        },
        {
            "id": 114,
            "name": "\u0422\u0440\u0438\u0445\u043e\u043b\u043e\u0433",
            "doctors_count": 3
        },
        {
            "id": 81,
            "name": "\u0423\u0417\u0418",
            "doctors_count": 24
        },
        {
            "id": 130,
            "name": "\u0423\u0440\u043e\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 83,
            "name": "\u0423\u0440\u043e\u043b\u043e\u0433",
            "doctors_count": 5
        },
        {
            "id": 120,
            "name": "\u0424\u0438\u0437\u0438\u043e\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctors_count": 2
        },
        {
            "id": 84,
            "name": "\u0424\u043b\u0435\u0431\u043e\u043b\u043e\u0433",
            "doctors_count": 4
        },
        {
            "id": 121,
            "name": "\u0424\u043e\u043d\u0438\u0430\u0442\u0440",
            "doctors_count": 1
        },
        {
            "id": 126,
            "name": "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442",
            "doctors_count": 7
        },
        {
            "id": 86,
            "name": "\u0425\u0438\u0440\u0443\u0440\u0433",
            "doctors_count": 9
        },
        {
            "id": 88,
            "name": "\u042d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 14
        },
        {
            "id": 107,
            "name": "\u042d\u043d\u0434\u043e\u0441\u043a\u043e\u043f\u0438\u0441\u0442",
            "doctors_count": 1
        },
        {
            "id": 111,
            "name": "\u042d\u043f\u0438\u043b\u0435\u043f\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        },
        {
            "id": 128,
            "name": "\u042e\u0440\u0438\u0441\u0442",
            "doctors_count": 2
        }
    ]
}

class FilterService {


    async getAll(): Promise<IFilter> {
        
        // const res = await fetch('')

        // const filters: IFilter = await res.json();
        return FILTERS
    }



}

export const filterService = new FilterService()