abstract class Parent
{
	abstract void m1();
	void m2()
	{
		System.out.println("This is parent");
	}
}
class Child extends Parent
{
    void m1()
    {
    	System.out.println("This is child");
    }
}
class RunAbstract
{
	public static void main(String args[])
	{
       Child c = new Child();
       c.m1();
       c.m2();
	}
}