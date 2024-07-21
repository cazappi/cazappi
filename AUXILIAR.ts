const userSchema = z.object({
    email: z.string().email(),
    document: z.string().min(11).max(14),
    documentType: z.nativeEnum(DocumentTypes),
    name: z.string().min(1),
    password: z.string().min(4),
    confirmedEmail: z.boolean(),
    isUserDeleted: z.boolean(),
    image: z.string()
})


const schema = z.object({
        shopkeeper: z.object({
          name: z.string().max(50),
          email: z.string().email(),
          document: z.string().min(1),
          documentType: z.nativeEnum(DocumentTypes),
          password: z.string().min(4),
          confirmedEmail: z.boolean().optional(),
          bank: z.string(),
          account: z.string(),
          agency: z.string()
        }),
        store: z.object({
          name: z.string().min(2).max(30).optional(),
          //agency: z.string().max(5).optional().nullable(),
          //accountType: z.string().max(4).optional().nullable(),
          //accountNumber: z.string().max(11).optional().nullable(),
          pix: z.string().optional().nullable(),
          category: z.nativeEnum(StoreCategory),
          subCategory: z.string().optional().nullable(),
          delivery: z.boolean(),
          deliveryFee: z.number(),
          //rating: z.number().nullable(),
          pickup: z.boolean(),
          serviceRadius: z.number().nullable(),
          //imagePerfil: z.string().nullable(),
          //imageBanner: z.string().nullable(),
          document: z.string().min(11).max(14),
          documentType: z.nativeEnum(DocumentTypes),
          schedule: z
            .array(
              z.object({
                openingTime: z.object({
                  mon: z.string(),
                  tue: z.string(),
                  wed: z.string(),
                  thur: z.string(),
                  fri: z.string(),
                  sat: z.string(),
                  sun: z.string()
                }),
                closingTime: z.object({
                  mon: z.string(),
                  tue: z.string(),
                  wed: z.string(),
                  thur: z.string(),
                  fri: z.string(),
                  sat: z.string(),
                  sun: z.string()
                })
              })
            )
            .or(z.array(z.any()).length(0)),
          address: z.optional(
            z.object({
              city: z.string(),
              state: z.string(),
              street: z.string().nullable(),
              zipCode: z.string().length(8).nullable(),
              number: z.string().nullable(),
              district: z.string().nullable(),
              complement: z.string().nullable()
            })
          )
        })
      })