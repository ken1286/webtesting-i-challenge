const enhancer = require('./enhancer.js');
// test away!

// it('runs the tests', () => {
//   const expected = true;
  
//   const actual = true;

//   expect(actual).toBe(expected);
// });

// describe('calculator.js', () => {
//   describe('add() method', () => {

//     it('should return the sum of 2 numbers', () => {
//       const sum = calculator.add(2, 2);

//       except(sum).toBe(4);
//     });
//   });
// });

describe('enhancer.js', () => {

  describe('repair(item) method', () => {
    it('should make item durability 100', () => {

      const item = { name: 'sword', enhancement: 10, durability: 50 };
      // const actual = 
      // const expected = 

      expect(enhancer.repair(item)).toEqual({ ...item, durability: 100});
      expect(enhancer.repair(item).durability).toBe(100);
    });

    it.todo('should have a max durability of 100');
  });

  describe('succeed(item) method', () => {
    it('should increase item enhancement by 1 if less than 20', () => {
      const item = { name: 'sword', enhancement: 10, durability: 50 };
      const fullItem = { name: 'bow', enhancement: 20, durability: 50 };

      expect(enhancer.succeed(item)).toEqual({...item, enhancement:11});
      expect(enhancer.succeed(item).enhancement).toBe(11);
      expect(enhancer.succeed(fullItem)).toEqual(fullItem);
    });
  });

  describe('fail(item) method', () => {

    it('should decrease durability by 5 if enhance < 15', () => {

      const item = { name: 'sword', enhancement: 10, durability: 50 };
      const itemAbove15Enh = { name: 'bow', enhancement: 20, durability: 50 };

      expect(enhancer.fail(item)).toEqual({...item, durability: 45});
      
    });

    it('should decrease durability by 10 if enhance >= 15', () => {

      const item1 = { name: 'bow', enhancement: 20, durability: 50 };
      const item2 = { name: 'bow', enhancement: 15, durability: 50 };

      expect(enhancer.fail(item1)).toEqual({...item1, enhancement: 19, durability: 40});
      expect(enhancer.fail(item2)).toEqual({...item2, enhancement: 15, durability: 40});
    });

    it('should keep minimum enhance at 0, maximum at 20', () => {


      const item1 = { name: 'bow', enhancement: -5, durability: 50 };
      const item2 = { name: 'bow', enhancement: 25, durability: 50 };

      expect(enhancer.fail(item1).enhancement).toBe(0);
      expect(enhancer.fail(item2).enhancement).toBe(19);
    })
  });
});